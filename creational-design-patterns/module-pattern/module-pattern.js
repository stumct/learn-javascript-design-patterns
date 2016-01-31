// Module patter is a simple way to encapsulate methods
// This creates a "Toolbox" of functions to use.

// Module can essentially be just an object literal
var Module = {
  method: function() {...},
  nextMethod: function() {...}
}

// We can also wrap it in a function for more features

var Module = function() {
  // privateVar is not accessible outside of this function
  var privateVar = 'I am private...'
  // the returned object can access privateVar as it has a closure around it
  return {
    method: function() {...},
    nextMethod: function() {...}
  }
}

// We can export a module using CommonJS module.exports
module.exports = Module;
