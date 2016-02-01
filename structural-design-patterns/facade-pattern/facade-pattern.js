// Facade hides the complexity of the backed subsystem
// Used to simplify an interface
// Jquery is most popular facade for DOM interaction


var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

var TaskService = function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log('completing task: ' + task.name)
    },
    setCompleteData: function(task) {
      task.completedDate = new Date();
      console.log(task.name + 'completed on ' + task.completedDate)
    },
    notifyCompletion: function(task, user) {
      console.log('Notifying ' + user + ' of the completion of ' + task.name)
    },
    save: function(task) {
      console.log('saving Task: ' + task.name)
    }
  }
}();

//This is our facade, the TaskServiceWrapper - using the revealing module pattern
var TaskServiceWrapper = function() {
  var completeAndNotify = function(task) {
    TaskService.complete(task);
    if (task.completed == true) {
      TaskService.setCompleteData(task);
      TaskService.notifyCompletion(task, task.user);
      TaskService.save(task);
    }
  }
  return {
    completeAndNotify: completeAndNotify
  }
}();

var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'jon',
  completed: false
});
/*
// This is some horrible code to complete a task, which we can sort with a facade
TaskService.complete(myTask);
if (myTask.completed == true) {
  TaskService.setCompleteData(myTask);
  TaskService.notifyCompletion(myTask, myTask.user);
  TaskService.save(myTask);
}
*/

// Call our facade to complete and notifyCompletion
TaskServiceWrapper.completeAndNotify(myTask)
console.log(myTask);
