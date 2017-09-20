package tds.iris.repository;


import AIR.Common.Configuration.AppSettingsHelper;
import AIR.Common.Utilities.SpringApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import tds.iris.abstractions.repository.IContentHelper;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;

import static java.nio.file.StandardWatchEventKinds.*;
@Component
@Scope("prototype")
public class ContentWatcher extends Thread{
    private static final Logger _logger = LoggerFactory.getLogger(ContentWatcher.class);
    private IContentHelper _contentHelper = SpringApplicationContext.getBean("contentHelper", IContentHelper.class);

    public ContentWatcher(){}

    @Override
    public void run(){
        _logger.info("Watching for content");
        try{
            watchForChange();
        }catch(Exception e){
            _logger.error(e.getMessage());
        }
    }

    //create watcher to watch file directory for changes
    private WatchService createWatcher(String root) throws Exception {
        Path itemsPath = Paths.get(root, "Items");
        Path stimuliPath = Paths.get(root, "Stimuli");
        try {
            final WatchService watcher = FileSystems.getDefault().newWatchService();
            Files.walkFileTree(itemsPath, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                    dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                    return FileVisitResult.CONTINUE;
                }
            });
            Files.walkFileTree(stimuliPath, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                    dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                    return FileVisitResult.CONTINUE;
                }
            });

            return watcher;
        } catch (IOException e) {
            _logger.warn(e.getMessage());
            throw e;
        }
    }

    public void watchForChange() throws Exception {
        String irisPath = AppSettingsHelper.get("iris.ContentPath");

        final WatchService watcher = createWatcher(irisPath);
        //create infinite while loop to track changes in the directory
        while(true){
            WatchKey key = null;
            try{
                key = watcher.take();
            }catch(InterruptedException ex){
                return;
            }

            //for each event, check what type of event happened within the directory
            for(WatchEvent event : key.pollEvents()){
                Path dir = (Path)key.watchable();
                if(event.kind() == ENTRY_CREATE){
                    Path fullPath = dir.resolve(event.context().toString());
                    if(Files.isDirectory(fullPath)){
                        try{
                            Files.walkFileTree(dir, new SimpleFileVisitor<Path>() {
                                @Override
                                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
                                    dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                                    return FileVisitResult.CONTINUE;
                                }
                            });
                        }catch(Exception e){
                            _logger.warn("Could not register directory " + fullPath.toString());
                        }
                        _logger.info("Watch content add: " + fullPath.toString());
                    }else{
                        fullPath = fullPath.getParent();
                        _logger.info("Watch content updating parent: " + fullPath.toString());
                    }
                    _contentHelper.addFile(fullPath.toString());

                } else if(event.kind() == ENTRY_DELETE) {
                    Path path = dir.toAbsolutePath();
                    String pathLocation = path.toString();
                    Path fullPath = dir.resolve(event.context().toString());

                    if(path.endsWith("Items") || path.endsWith("Stimuli")){
                        _logger.info("Watch content removing: " + fullPath.toString());
                        _contentHelper.removeFile(fullPath.toString());
                    }else if(!Files.isDirectory(fullPath) && Files.isDirectory(path)){
                        _logger.info("Watch content updating parent: " + pathLocation);
                        _contentHelper.addFile(pathLocation);
                    }

                } else if(event.kind() == ENTRY_MODIFY) {
                    Path fullPath = dir.resolve(event.context().toString());
                    if(!Files.isDirectory(fullPath)){
                        fullPath = fullPath.getParent();
                        if(Files.isDirectory(fullPath)){
                            _logger.info("Watch content updated: " + fullPath.toString());
                            _contentHelper.addFile(fullPath.toString());
                        }
                    }
                }
            }

            boolean valid = key.reset();
            if(!valid){
                break;
            }
        }
    }
}