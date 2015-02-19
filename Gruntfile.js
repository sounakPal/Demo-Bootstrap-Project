module.exports = function(grunt) {
  grunt.initConfig({
	uncss: {
      dist: {
        src: ['index.html'],
        dest: 'css/tidy.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');

grunt.registerTask('default', ['uncss']);

};



