# Example

* ```app.js```:
```
const { app, checkhelper, config, express, healthcheck, info, logging, silentLogging }
  = require('mxd-environment')();
```

* ```package.json```:
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

# upgrade from ```mxd-environment 3.x```

coming soon...
