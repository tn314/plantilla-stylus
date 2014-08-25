module.exports = function(grunt) {

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');;

  // Project configuration.
  grunt.initConfig({

      stylus: {
          compile: {
              paths:['css/'],
              options: {
                  use: [
                      require('nib')
                  ],
                  compress: false
              },
              files: {
                  'css/style.css': 'src/stylesheet/style.styl'
              }
          }
      },
      watch: {
          options: {
              livereload: true  
          },
          styl: {
              files: ['src/stylesheet/*.styl'],
              tasks:['stylus:compile']
          }
      },
      cssmin: {
          add_banner: {
              options: {
                  banner: '/* css -- normalize.css v2.1.3 | MIT License | git.io/normalize */'
              },
              files: {
                  'css/style.min.css': ['css/style.css']
              }
          }
      }

  });



    // Default task(s).
  /*grunt.registerTask('default', ['stylus', 'connect', 'watch']);*/

  grunt.registerTask('observer',['watch']);

  grunt.registerTask('deploy',['cssmin']);

};