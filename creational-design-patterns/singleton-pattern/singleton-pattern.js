// Used to restrict an object to one instance of that object across the application
// Remembers the last time you used it
// Hands you back the same instance

var TaskRepo = (function() {
  var taskRepo;

  function createRepo() {
    var taskRepo = new Object("Task");
    return taskRepo;
  }

  return getInstance: function() {
    // Checks to se if taskRepo has already been created and assigned
    if (!taskRepo) {
      // if not then create and assign it
      taskRepo = createRepo();
    }
    // return the taskRepo
    return taskRepo;
  }
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
  console.log("Same TaskRepo")
}
