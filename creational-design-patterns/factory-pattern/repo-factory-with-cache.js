var repoFactory = function() {

  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      if (this.taskRepo) {
        return this.taskRepo;
      } else {
        this.taskRepo = require('./taskRepository')();
        //config code can go here
        return this.taskRepo;
      }

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
