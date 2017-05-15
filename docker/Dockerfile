FROM osucass/sbtomcat

ARG source=content/
ARG contentStore=/home/tomcat7/content/
COPY $source $contentStore

WORKDIR /usr/local/tomcat/webapps
RUN  rm -rf ROOT
COPY iris.war .

RUN mv iris.war ROOT.war

WORKDIR /usr/local/tomcat/

ENTRYPOINT ["catalina.sh", "run"]