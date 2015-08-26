'use strict';
/**
 * The `release` task releases compiled assets to a samba share defined in config.js
 */
module.exports = {
  config: {
    version: '<%= bower.version %>',
    localFolder: '<%= buildConfig.compileDir %>',
    devUrl: '<%= samba %>'
  }
};