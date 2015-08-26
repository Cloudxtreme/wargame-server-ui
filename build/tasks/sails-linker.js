'use strict';

module.exports = {
  css: {
    options: {
      startTag: '<!--inject:css-->',
      endTag: '<!--end-inject:css-->',
      fileTmpl: '<link rel="stylesheet" type="text/css" href="%s" />',
      appRoot: 'target/',
      relative: true
    },
    files: {
      // Target-specific file lists and/or options go here.
      'target/index.html': [
        '<%= buildConfig.vendorFiles.css%>',
        '<%= buildConfig.buildDir%>/**/*.css',
        '!<%= buildConfig.buildDir%>/node_modules/**/*.css'
      ]
    }
  },
  
  js: {
    options: {
      startTag: '<!--inject:js-->',
      endTag: '<!--end-inject:js-->',
      fileTmpl: '<script src="%s"></script>',
      appRoot: 'target/',
      relative: true
    },
    files: {
      // Target-specific file lists and/or options go here.
      'target/index.html': [
        '<%= buildConfig.vendorFiles.js%>',
        '<%= buildConfig.buildDir%>/**/*module.js',
        '<%= buildConfig.buildDir%>/**/*.js',
        '!<%= buildConfig.buildDir%>/node_modules/**/*.js',
      ]
    }
  }
};
