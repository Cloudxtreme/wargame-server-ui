'use strict';

/**
 * `grunt filerev` appends a unique hash to the filename for cache busting.
 */
module.exports = {
	options: {
		dest: '<%= buildConfig.compileDir %>'
	}
};