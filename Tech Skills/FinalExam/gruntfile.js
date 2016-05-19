module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
            js: {
                src: ['src/js/*.js','src/js/plagins/*.js'],
                dest: 'js/final-exam.min.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['src/css/reset.css','src/css/fonts.css','src/css/promo.css'],
                dest: 'css/final-exam.min.css',
                options: {
                    separator: '\n\r'
                }
            },
	  },
	  uglify: {
	    dist: {
	      src: ['js/dz19-20.min.js'],
	      dest: 'js/dz19-20.min.js',
	    },
	  } ,
	  cssmin: {
  	    target: {
    	      files: [{
      	      	expand: true,
      		cwd: 'css',
      		src: ['dz19-20.css'],
      		dest: 'css',
      		ext: '.min.css'
    	     }]
  	   }
	 },
         sass: {
		options: {
			sourceMap: false,
                        linefeed : 'crlf'
		},
		dist: {
			files: {
				'src/css/promo.css': 'src/scss/promo.scss'
			}
		}
	},
         watch: {
                css: {
                     files: ['src/scss/*.scss','src/js/*.js'],
                     tasks: ['sass','concat'/*,'cssmin','uglify'*/],
                },
         }   
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');                
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');                   
	grunt.loadNpmTasks('grunt-sass');	
	
grunt.registerTask('default',['sass','concat'/*,'cssmin','uglify'*/]);
}