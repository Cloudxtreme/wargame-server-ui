'use strict';

/**
 * `ng-annotate` annotates the sources before minifying. That is, it allows us to code without the array syntax.
 */
module.exports = {
    target: {
        src: ['<%= concat.compileJS.dest %>'],
        dest: '<%= concat.compileJS.dest %>'
    }
};
