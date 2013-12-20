module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          importPath: 'public/scss/foundation',
          sassDir: 'public/scss',
          cssDir: 'public/css',
          outputStyle: 'nested'
        }
      }
    },
    concat: {
      all: {
        src: [
          'public/js/vendor/jquery-1.10.2.js',
          'public/js/vendor/imagesloaded.pkgd.js',
          'public/js/vendor/masonry.pkgd.js',
          'public/js/vendor/angular.min.js',
          'public/js/angular/wu.masonry.js',
          'public/js/angular/app.js',
          'public/js/angular/services.js',
          'public/js/angular/controllers.js'
        ],
        dest: 'public/js/combined.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'concat']);

};
