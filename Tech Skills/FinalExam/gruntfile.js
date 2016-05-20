module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
            js: {
                src: ['src/js/*.js','src/js/plugins/*.js'],
                dest: 'js/final-exam.min.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['src/css/reset.css','src/css/fonts.css','src/css/promo.css','src/css/how-it-works.css'],
                dest: 'css/final-exam.min.css',
                options: {
                    separator: '\n\r'
                }
            },
	  },
	  uglify: {
	    dist: {
	      src: ['js/final-exam.min.js'],
	      dest: 'js/final-exam.min.js',
	    },
	  } ,
	  cssmin: {
  	    target: {
    	      files: [{
      	      	expand: true,
      		cwd: 'css',
      		src: ['final-exam.min.css'],
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
				'src/css/promo.css': 'src/scss/promo.scss',
				'src/css/how-it-works.css': 'src/scss/how-it-works.scss'
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