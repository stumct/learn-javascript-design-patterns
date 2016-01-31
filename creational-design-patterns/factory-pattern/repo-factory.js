var repoFactory = function() {

  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      var taskRepo = require('./taskRepository')();
    }
    if (repoType === 'user') {
      var userRepo = require('./userRepository')();
    }
    if (repoType === 'project') {
      var projectRepo = require('./projectRepository')();
    }
  }
};

module.exports = new repoFactory;
