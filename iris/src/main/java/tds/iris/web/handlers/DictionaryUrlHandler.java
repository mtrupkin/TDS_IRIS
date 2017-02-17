package tds.iris.web.handlers;

import AIR.Common.Configuration.AppSettingsHelper;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Scope("prototype")
@Controller
public class DictionaryUrlHandler {

    @RequestMapping(value = "accommodations/dictionary", method = RequestMethod.GET, produces = "text/plain")
    @ResponseBody
    public String loadDictionary () {
        return AppSettingsHelper.get("iris.DictionaryUrl");
    }
}
