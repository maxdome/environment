# Example

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

# Upgrade from mxd-environment v3.x

coming soon...
