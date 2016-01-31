var taskHandler = require('./taskHandler-singleton-in-nodejs');
var myrepo = require('./repo-singleton-in-nodejs');


// in nodejs require('module') is cached - so the exact same object is returned
// each time require('module') is called.
// to get around this then module.exports a function, and call it after require
// e.g. var module = require('module')()

// nodejs modules are always singleton unless they export the function

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
