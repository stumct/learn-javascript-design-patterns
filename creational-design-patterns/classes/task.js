// currently to enable classes and other ES6 features in node (>v5) we have to 'use strict'
'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    console.log('completing Task: ' + this.name)
    this.completed = true;
  }
  save() {
    console.log('saving Task: ' + this.name)
  }
}

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
