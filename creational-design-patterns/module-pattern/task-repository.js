var repo = function() {
  return {
    get: function(id) {
      console.log('getting task: ' + id)
      return {
        name: 'new task from the db'
      }
    },
    save: function(task) {
      console.log('saving ' + task.name + ' to the db')
    }
  }
}

module.exports = repo();
