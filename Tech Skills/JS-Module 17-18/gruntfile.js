module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
            js: {
                src: ['js/src/*.js'],
                dest: 'js/dz17-18.min.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['css/src/*.css'],
                dest: 'css/dz17-18.min.css',
                options: {
                    separator: '\n\r'
                }
            },
	  },
	  uglify: {
	    dist: {
	      src: ['js/dz17-18.min.js'],
	      dest: 'js/dz17-18.min.js',
	    },
	  } ,
	  cssmin: {
  	    target: {
    	      files: [{
      	      	expand: true,
      		cwd: 'css',
      		src: ['dz17-18.min.css'],
      		dest: 'css',
      		ext: '.min.css'
    	     }]
  	   }
	}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default',['concat','uglify','cssmin']);
}