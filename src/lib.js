'use strict';

module.exports = environment => {
  const config = require('mxd-config')(environment);

  const { app, express } = require('mxd-express')(config);
  const { checkhelper, healthcheck } = require('mxd-healthcheck')(config, app);
  const info = require('mxd-info')(config, app);
  const logging = require('mxd-logging')(config);
  const silentLogging = require('mxd-silent-logging')(config);

  return {
    app: app,
    checkhelper: checkhelper,
    config: config,
    express: express,
    healthcheck: healthcheck,
    info: info,
    logging: logging,
    silentLogging: silentLogging
  };
};
