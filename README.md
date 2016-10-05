# Development

## Example

* `app.js` (with babel and destructioning):
  
```
const { app, checkhelper, config, express, healthcheck, info, logging, silentLogging }
  = require('mxd-environment')();
  
// example route
  
app.get('/', (req, res) => {
  res.send('Hello World!');
});  
```
  
* `app.js` (without babel):
  
```
const environment = require('mxd-environment')();
const app = environment.app;

// example route

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

* `package.json`:

```
{
  "scripts": {
    "start": "mxd-start",
    "status" : "mxd-status",
    "stop" : "mxd-stop"
  },
  "dependencies: {
    "mxd-environment": "^4.0.0"
  }
}
```

## Upgrade from mxd-environment v3.x

coming soon...


# Systemadministration

## Configuration

All configurations can be overwritten in the `config/properties.json`.
There are different attributes offered by the different subpackages of the `mxd-environment` and different depending on the application itself.

**Important: If an attribute is overwritten, the complete tree of the attribut must be defined!**

* `mxd-express`:
```
{
  "port": 80,
  "hostname": undefined
}
```

* `mxd-logging` (mandatory for logging into file):
```
{
  "logging": {
    "transports": [
      { 
        "type": "File",
        "options": { 
          "filename": "/path/to/the/logfile.log",
          "level": "info"
        }
      }
    ]
  }
}
```

## Routes

* `mxd-express`: 
`/ping` (all HTTP verbs are allowed) response a 200 if the app is running and shouldn't be restricted

* `mxd-healthcheck`, `mxd-info`, `mxd-swagger`: 
All routes starting with `/docs`, `/health`, `/info` and the route `/api-docs` should be available in the office network or restricted by basic auth
