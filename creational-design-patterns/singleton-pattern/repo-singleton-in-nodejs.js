var repo = function() {
  var called = 0;

  var save = function(task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + ' times');
  }
  console.log('newing up task repo')
  return {
    save: save
  }
}

// since we execute the function before exporting it, node can cache the module.
// to get a new copy each time, we need to export the function itself and call
// it after.
module.exports = repo();
