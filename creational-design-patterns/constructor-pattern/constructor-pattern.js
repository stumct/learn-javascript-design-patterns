// using the 'new' keyword
// using new in front of a function creates a new object
// links the object to an object prototype
// binds 'this' to the new object scope
// implicitly returns this

function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function() {
      return this.param1 + ' ' + this.param2;
    }
    // implicitly returns 'this'
}

var object = new ObjectName('foo', 'bar');

// Drawbacks - toString() function is created for each object.
// this function would be better being placed on the prototype
// as it is the same for every instance created.

ClassName.prototype.methodName = function(arguments) {

}
