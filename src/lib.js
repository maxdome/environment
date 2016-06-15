'use strict';

module.exports = (config) => {
  const environment = {};

  require('mxd-config')(config);
  environment.healthcheck = require('mxd-healthcheck')();
  environment.logging = require('mxd-logging')(config);
  environment.silentLogging = require('mxd-silent-logging')(config);

  environment.info = require('mxd-info')(config);
  
  return environment;
};
