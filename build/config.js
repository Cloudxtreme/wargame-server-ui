'use strict';

/**
 * This file/module contains the configuration options for the build & run process.
 */
module.exports = {

    /**
     * This is the same as `appFiles`, except it contains patterns that reference vendor code (`vendor/`) that we need to place into the build process
     * somewhere. While the `appFiles` property ensures all standardized files are collected for compilation, it is the user's job to ensure non-standardized
     * (i.e. vendor-related) files are handled appropriately in `vendorFiles.js`. The `vendorFiles.js` property holds files to be automatically concatenated
     * and minified with our project source files. The `vendorFiles.css` property holds any CSS files to be automatically included in our app. The `vendorFiles.html`
     * and `vendorFiles.images` properties hold files that will not be flattened or minified. Add Ricola lib files here. `vendorFiles.assets` property holds any
     * assets to be copied along with our app's assets. This structure is flattened, so it is not recommended that you use wildcards.
     */
    vendorFiles: {
        js: [
          'node_modules/angular/angular.js',
          'node_modules/angular-animate/angular-animate.js',
          'node_modules/angular-cookies/angular-cookies.js',
          'node_modules/angular-resource/angular-resource.js',
          'node_modules/angular-sanitize/angular-sanitize.js',
          'node_modules/angular-touch/angular-touch.js',
          'node_modules/angular-ui-bootstrap/ui-bootstrap.js',
          'node_modules/angular-ui-router/release/angular-ui-router.js',
          'node_modules/spin.js/spin.js',
          'node_modules/angular-spinner/angular-spinner.js'
        ],
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css'
        ],
        // files in html/images will not be flattened or minified
        html: [],
        images: [],
        assets: []
    },
    
    /**
     * The `buildDir` folder is where our projects are compiled during development and the `compileDir` folder is where our app resides once it's completely
     * built.
     */
    buildDir: 'target',
    compileDir: 'target/bin',

    /**
     * This is a collection of file patterns that refer to our app code (the stuff in `src/`). These file paths are used in the configuration of build tasks.
     * `js` is all project javascript, scss tests. `ctpl` contains our reusable components' (`src/common`) template HTML files, while `atpl` contains the same,
     * but for our app's code. `html` is just our main HTML file, `scss` is our main stylesheet, and `unit` contains our app's unit tests.
     */
    appFiles: {
        js: ['src/**/*module*.js', 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
        jsunit: ['src/**/*.spec.js'],

        atpl: ['src/app/**/*.html'],
        ctpl: ['src/common/**/*.html'],

        html: ['src/index.html'],
        sass: 'src/css/main.scss'
    },

    /**
     * This is a collection of files used during testing only.  Before - loaded before your test scripts.  After - well you take a wild guess.
     */
    testFiles: {
        before: {
            js: []
        },
        after: {
            js: ['vendor/angular-mocks/angular-mocks.js']
        }
    }
};
