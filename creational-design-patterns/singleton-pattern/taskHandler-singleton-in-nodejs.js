var myrepo = require('./repo-singleton-in-nodejs');

var taskHandler = function() {
  return {
    save: function() {
      myrepo.save('Hi from taskHandler');
    }
  }
}
module.exports = taskHandler();
