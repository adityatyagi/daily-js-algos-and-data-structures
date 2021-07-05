"use strict";

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
function log(toLog) {
  console.log(toLog);
}

let adi = new User('Aditya');
adi.sayHi();

// type of class
console.log(typeof User); // function
console.log(User === User.prototype.constructor);
log(User.prototype.sayHi)

log(Object.getOwnPropertyNames(User.prototype))

// using function as a class
function User2(name) {
  this.name = name;
}
User2.prototype.sayHi = function () {
  log(this.name);
}
let user2 = new User2('Aditya');
user2.sayHi();

// Class Expressions
// anonymous function expression
let Person = class {
  name() {
    log('this is person')
  }
};
let person2 = new Person();
person2.name();

// named function expression
let Person2 = class MyPersonClass {
  sayHello() {
    log('my person class')
  };
};
let person3 = new Person2();
person3.sayHello();

// classes on demand - returning classes from the function
function createClass() {
  return class {
    sayCreateClass() {
      log('created class');
    };
  };
};
let DynamicClass = createClass();
let dynObj = new DynamicClass();
dynObj.sayCreateClass();

// Getters/Setters on the class
class Car {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(value.length < 2) {
      log('Name is too short');
      return;
    }
    this._name = value;
  }
}

let car1 = new Car('Honda');
log(car1.name); // getter runs

// create class methods on the fly - computed name
class Home {
  constructor(name){
    this.name = name;
  }
  ['say' + 'Hi'] () {
    log('Hellosadad')
  }

}

let home1 = new Home();

home1.sayHi();

// class fields - new feature
class User3 {
  name = 'Aditya'; // this is new the language
  sayHi() {
    log(`Hi ${this.name}`);
  };
};
new User3().sayHi();

// Binding methods with class fields
// functions in js has a dynamic "this" and depends on the context of the call - bind, call, apply
// arrow functions, regular functions

class Laptop {
  constructor(name) {
    this.name = name;
  };

  sayLaptopName () {
    console.log('laptop name is', this.name);
  };

  // is created per-object basis
  sayLaptopName2 = () => {
    console.log('laptop name is', this.name);
  }
};

let lappy = new Laptop('dell');
// setTimeout(lappy.sayLaptopName(), 1000); // problem
setTimeout(() => lappy.sayLaptopName(), 1000); // solution 1: wrap the function
setTimeout(lappy.sayLaptopName2, 2000); // solution 2: arrow function within the class and here we have to give REFERENCE and not call the function


// extending the inbuilt classes
class PowerArray extends Array {
  isEmpty() {
    // because the parent class Array already has a length property
    return this.length;
  }
}
let a = new PowerArray(1,2,3,4);
console.log(a.length);
console.log(a.isEmpty());

// calling diff. inbuilt array methods on the object of the PowerArray returns PowerArray only
let b = a.map(item => a*2);
console.log(b.constructor === PowerArray);

// but if we want that the inbuilt functions return Array only, then we have to change the
// property Symbol.species in the PowerArray
class PowerArray2 extends Array {
  isEmpty() {
    return this.length;
  }
  static get [Symbol.species]() {
    return Array;
  }
}
let a2 = new PowerArray(1,2,3,4);
let b2 = a2.map(item => item * 2);
console.log(b2.constructor === PowerArray2);

// there is no static inheritance in built in objects



