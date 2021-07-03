// Prototype and inheritance
// cloning an object: let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

class Animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} runs`);
  };
  eat() {
    console.log(`${this.name} eats`);
  };
}

let basicAnimal = new Animal('Monkey');
basicAnimal.eat();
basicAnimal.run();

// creating a class to extend the Animal class
class Rabit extends Animal {
  constructor(name) {
    super(name); // to call the parent constructor
  }
  hop() {
    console.log('I hope');
  }
}

let rab = new Rabit('Rabbit');
rab.run(); // takes the .run method from the Animal.prototype

// OVERRIDING A METHOD
class Horse extends Animal {
  constructor(name)  {
    super(name);
  }
  eat() {
    console.log('this is the eat method for Horse');
    super.eat(); // calling parents' method
  }
  run() {
    // setTimeout(function () {super.run()}, 1000); // will give an error
    setTimeout(() => super.run(), 1000);
  }
}

let hor = new Horse('horsy');
hor.eat();

// class extending another class without any constructor of its own
class Country {
  constructor(name) {
    this.name = name;
  }
  printCountry() {
    console.log('this is country');
  }
}

class City extends Country {
  // no constructor means
  /**
   * constructor(...args) {
   *  super(...args);
   * }
   */

   // Constructors in inheriting classes must call super(...), and (!) do it before using this.
}
let city1 = new City('India');
city1.printCountry()

