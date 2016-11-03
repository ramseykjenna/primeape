/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    outputPaths: {
      app: {
        css: {
          'app': '/assets/primeape.css',
          'app-vendor': '/assets/app-vendor.css',
          'blue-harvest/print/print': '/assets/primeape-print.css',
          'blue-harvest/responsive/lt-IE10': '/assets/primeape-responsive-lt-ie10.css',
          'blue-harvest/responsive/lt-IE8': '/assets/primeape-responsive-lt-ie8.css',
          'blue-harvest/responsive/lt-IE9': '/assets/primeape-responsive-lt-ie9.css',
          'blue-harvest/responsive/phone': '/assets/primeape-responsive-phone.css',
          'blue-harvest/responsive/phone-to-tablet': '/assets/primeape-responsive-phone-to-tablet.css',
          'blue-harvest/responsive/tablet-to-small-desktop': '/assets/primeape-responsive-tablet-to-small-desktop.css',
        }
      }
    },
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/vendor/assets/stylesheets'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap-sass/vendor/assets/images/glyphicons-halflings-white.png', {
    destDir: 'assets/images'
  });

  app.import('bower_components/bootstrap-sass/vendor/assets/images/glyphicons-halflings.png', {
    destDir: 'assets/images'
  });

  app.import('bower_components/font-awesome/font/fontawesome-webfont.eot', {
    destDir: 'assets/fonts'
  });

  app.import('bower_components/font-awesome/font/fontawesome-webfont.svg', {
    destDir: 'assets/fonts'
  });

  app.import('bower_components/font-awesome/font/fontawesome-webfont.ttf', {
    destDir: 'assets/fonts'
  });

  app.import('bower_components/font-awesome/font/fontawesome-webfont.woff', {
    destDir: 'assets/fonts'
  });

  app.import('bower_components/font-awesome/font/FontAwesome.otf', {
    destDir: 'assets/fonts'
  });

  return app.toTree();
};
