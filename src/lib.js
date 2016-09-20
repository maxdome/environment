'use strict';

module.exports = environment => {
  const config = require('mxd-config')(environment);

  const mxdExpress = require('mxd-express')(config);
  const app = mxdExpress.app;
  const express = mxdExpress.express;

  const mxdHealthcheck = require('mxd-healthcheck')(config, app);
  const checkhelper = mxdHealthcheck.checkhelper;
  const healthcheck = mxdHealthcheck.healthcheck;

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
