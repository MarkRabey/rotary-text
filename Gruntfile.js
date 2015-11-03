module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);


  var pkg = require('./package.json');
  var banner =
          ' * ' + pkg.title + ' v' + pkg.version + '\n' +
          ' * Copyright ' + grunt.template.today('yyyy') + ' ' + pkg.author + '\n' +
          ' * Licensed under the ' + pkg.license + ' license';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**!\n' + banner + '\n */\n',
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dev: {
        options: {
          compress: false
        },
        src: 'src/js/*.js',
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      dist: {
        options: {
          compress: true
        },
        src: 'src/js/*.js',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'expanded'
      },

      dev: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'src/sass/main.scss'
        }
      },

      dist: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'src/sass/main.scss'
        }
      },

      demo: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'demo/css/demo.min.css': 'src/sass/demo.scss'
        }
      }
    }, // end sass

    postcss: {
      options: {
        map: false
      },

      dev: {
        options: {
          processors: [
            require('autoprefixer')({browsers: 'last 5 versions'}),
            require('postcss-banner')({banner: '*!\n' + banner + '\n '})
          ]
        },

        src: 'dist/css/<%= pkg.name %>.css'
      },
      dist: {
        options: {
          processors: [
            require('autoprefixer')({browsers: 'last 5 versions'}),
            require('cssnano')({discardComments: false}),
            require('postcss-banner')({banner: '*!\n' + banner + '\n '})
          ]
        },
        src: 'dist/css/<%= pkg.name %>.min.css'
      }
    }, // end postcss

    watch: {
      less: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify']
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', ['build', 'watch']);

  grunt.registerTask('build', ['jshint','uglify', 'sass', 'postcss']);

};
