//classes in ES6 have a constructore and methods defined directly on them

class MyClass {
  constructor(param1) {
    this.param1 = param1;
  }
  say() {
    console.log(this.param1);
  }
}
