'use strict';

/**
 * Minify the javascript source files and create a map.
 */
module.exports = {
    compile: {
        options: {
            sourceMap: true,
            sourceMapIncludeSources: true,
            sourceMapIn: '<%= concat.compileJS.dest %>.map',
            sourceMapName: '<%=buildConfig.compileDir%>/main.js.map'
        },
        files: {
            '<%= concat.compileJS.dest %>': '<%= concat.compileJS.dest %>'
        }
    }
};
