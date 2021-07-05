// creating a mixin
// As defined in Wikipedia, a mixin is a class containing methods that can be used by other classes without a need to inherit from it.

let sayHiMixin = {
  sayHi() {
    console.log(`Hey ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
}
class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, sayHiMixin);
let user1 = new User('Aditya');
user1.sayHi();
user1.sayBye();

// mixin inheriting from another mixin
let sayHello = {
  say(phrase) {
    console.log(phrase);
  }
}
let sayHowdy = {
  __proto__: sayHello,
  sayH() {
    super.say(`Hello ${this.name}`);
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Person.prototype, sayHowdy);
let p = new Person('Aditya');
p.sayH();