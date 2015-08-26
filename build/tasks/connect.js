'use strict';

/**
 * Runs a connect server. The main item to be concerned with is the proxy server configuration
 */
module.exports = {
    proxies: [{
      context: '/wargame-api',
      host: 'localhost',
      port: 8080,
      https: false,
      xforward: false
    }],

    livereload: {
        options: {
        livereload: '<%= connectServerConfig.livereload %>',
        port: '<%= connectServerConfig.port %>',
        hostname: 'localhost',
            middleware: function(connect) {
                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                // Serve static files.
                middlewares.push(connect.static(require('path').resolve('target')));
                //middlewares.push(connect.static(require('path').resolve('vendor')));

                return middlewares;
            }
        }
    }
};
