# example

* ```app.js```:
```
// initialize the environment
const config = {};
const environment = require('mxd-environment')(config);

// initialize the healthcheck routes with the express app
const healthcheck = environment.healthcheck;
healthcheck.healthcheck(app);

// initialize the info routes with the express app
environment.info(app);

// initialize logger or silent logger
const appLogger = environment.logging('app');
const appSilentLogger = environment.silentLogging('app');
```

* ```package.json```:
```
{
  "scripts": {
    "start": "mxd-start",
    "status" : "mxd-status",
    "stop" : "mxd-stop"
  }
}
```


# upgrade from ```maxdome-node-environment```

* ```maxdome-node-``` prefix is everywhere renamed to ```mxd-```
* functionalities now splitted in separated packages mostly named like the attributes of the old ```environment```
* ```mxd-environment``` collects the standard functionalities like ```maxdome-node-environment``` done
  * the ```config``` parameter is now mandatory
  * the attributes ```LoggerFactory``` and ```SilentLoggerFactory``` are renamed to ```logging``` and ```silentLogging```, see also logging section
* info:
  * the ```summarize``` function which can be hooked in don't get anymore the ```info``` parameter
  * ```/info``` responses now the summary, the other information are available under subroutes:
    * the ```config``` attribute in the response of ```/info``` is now the response of ```/info/config```
    * the ```package``` attribute in the response of ```/info``` is now the response of ```/info/package```
    * the ```revision``` attribute is part of the response of ```/info/version```
  * ```/info/environments``` is removed to avoid basic auth credentials in the config
* logging:
  * is now splitted into ```logging``` and ```silent-logging```
  * use directly the returned factory function instead of ```.getCategoryLogger```
  * OR use a wrapper:
  ```
  const LoggerFactory = { getCategoryLogger: environment.silentLogging };
  const SilentLoggerFactory = { getCategoryLogger: environment.silentLogging };
  ```
* starter:
  * pm2 options can't anymore changed by the ```package.json```, only by the ```config/properties.json```
  * pm2 options in the ```properties.json``` are now located under ```mxd-starter```, but ```maxdome-node-starter``` is still supported for compatibility
  * cli commands are named with the prefix ```mxd-``` instead of ```maxdome-node-```
