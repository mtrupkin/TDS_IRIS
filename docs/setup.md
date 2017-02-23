# About IRIS
The IRIS takes a folder of Smarter Balanced assessment items as input, and loads them in an iframe.
A compiled WAR file is hosted in the [Smarter Balanced artifactory](https://airdev.artifactoryonline.com/airdev).
IRiS version 1.0.3 can be downloaded [here](https://airdev.artifactoryonline.com/airdev/libs-releases-local/org/opentestsystem/delivery/iris/1.0.3/iris-1.0.3.war).

## Configuration
### IRIS Configuration Files
IRIS uses the `iris/src/main/resources/settings-mysql.xml` for application configuration.
The `iris.ContentPath` variable in `iris/src/main/resources/settings-mysql.xml` specifies the directory containing the Smarter Balanced assessment items.
This must be set to a valid directory or the application will not run.
The content path in the precompiled IRIS WAR file is `/home/tomcat7/content`.
This must be changed if you wish to host the content in a different directory.

### Apache Tomcat Configuration Files
IRIS requires a 25 character alphanumeric encryption key set in Apache Tomcat's `conf/context.xml`.
```xml
<Parameter name="tds.iris.EncryptionKey" override="false" value="24 characters alphanumeric Encryption key" />
```

## Running IRiS
### Runtime Dependencies
* Java 7
* Apache Tomcat 7 or newer

Deploy IRIS to Tomcat by placing the WAR file in the Tomcat webapps directory, then restarting Tomcat.

### Displaying items
Navigate to `{irisRootURL}/IrisPages/sample.xhtml`.
To specify which item and accessibility options to load you must give the IRIS a JSON token with the following format.
```JSON
{
    "items": [{
        "response": "",
        "id": "I-ItemBank-ItemKey"
    }],
    "accommodations": [{
            "type": "AccessibilityFamily",
            "codes": ["AccessibilityCode1", "AccessibilityCode2"]
        }
    ]
}
```

For example, to load an item with bank 187 and key 856, with color contrast and print size accessibility options.
```JSON
{
    "items": [{
        "response": "",
        "id": "I-187-856"
    }],
    "accommodations": [{
            "type": "ColorContrast",
            "codes": ["TDS_CCYellowB"]
        },{
            "type": "Print Size",
            "codes": ["TDS_PS_L4"]
        }

    ]
}
```


## Building From Source
### Compile Time Dependencies
* Java 7
* Apache Maven


IRIS has a compile time dependency on several SmarterApp projects.
You will need to configure Maven to fetch these from an artifactory, or build and install them locally using Maven.
The SmarterApp artifactory is located at https://airdev.artifactoryonline.com/airdev/.
If you want to build and install them locally they can be downloaded from [SmarterApp's GitHub](https://github.com/SmarterApp).

