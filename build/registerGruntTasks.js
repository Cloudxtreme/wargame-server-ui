'use strict';

module.exports = function(grunt) {

    /**
     * Load custom build tasks
     */
    grunt.loadTasks('build/tasks/custom');

    /*
     * The 'help' task shows all available tasks.
     */
    grunt.registerTask('help', 'View available tasks in a nicely formatted list', ['availabletasks']);

    /**
     * We rename the `watch` task to `delta`.
     */
    grunt.renameTask('watch', 'delta');
    grunt.registerTask('watch', ['delta']);

    /**
     * The default task is to compile.
     */
    grunt.registerTask('default', 'Default task is to build app assets', ['build']);

    /**
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask('build', 'Build application assets', [
        'clean',
        'html2js',
        'jshint',
        'sass',
        'postcss',
        'copyContent',
        'sails-linker'
    ]);

    /**
     * This sets up the Karma server and tests to run once.
     */
    grunt.registerTask('test', 'Sets up a test server to run once.', [
        'html2js',
        'karmaConfig',
        'karma:unit'
    ]);

    /**
     * This sets up the Karma server to run in the background.
     */
    grunt.registerTask('testLoop', 'Run a test server in the background, watching for changes', [
        'build',
        'karmaConfig',
        'karma:loop'
    ]);

    /**
     * The `serve` task boots up a local node server & configures it's proxies, runs the watch task, and opens your browser to the index.html page,
     */
    grunt.registerTask('serve', 'Boots up a local node serve and watches source files for changes.', [
        'build',
        'configureProxies:livereload',
        'connect:livereload',
        //'karmaConfig',
        //'karma:loopBackground',
        'open',
        'watch'
    ]);

    /**
     * The `compile` task gets your app ready for deployment by concatenating and minifying your code.
     */
    grunt.registerTask('compile', 'Concat, minify, and compile the application assets', [
        'build',
        'copy:vendorImagesCompile',
        'copy:vendorAssetsCompile',
        'copy:vendorHTMLCompile',
        'copy:appAssetsCompile',
        'concat:compileJS',
        'concat:buildCSS',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'filerev',
        'fixSourceMap'
    ]);

    /**
     * This is not called directly but composes all the copy tasks for css & js.
     */
    grunt.registerTask('copyContent', 'Comprises each of the copy tasks for application', [
        'copy:appIndex',
        'copy:appAssets',
        'copy:appJS',
        'copy:vendorAssets',
        'copy:vendorHTML',
        'copy:vendorImages',
        'copy:vendorJS',
        'copy:vendorCSS'
    ]);

    // Aliases for compatibility's sake
    grunt.registerTask('testOnce', ['test']);
    grunt.registerTask('testContinuous', ['testLoop']);
};
