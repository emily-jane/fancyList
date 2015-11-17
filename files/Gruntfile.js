module.exports = function(grunt) {
  grunt.initConfig({
    config: grunt.file.readJSON('config.json')
  });

  grunt.registerTask('DoWork', 'Reads the version number from the config file.', function() {
    console.log(config)
    this.version = config.version;
  });
};