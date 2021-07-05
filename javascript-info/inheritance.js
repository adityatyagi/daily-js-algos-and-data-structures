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
   constructor(name, city) {
     super(name);
     console.log(city)
     this.city = city;
   }
   showCity() {
     console.log(`${this.city} is in the country ${this.name}`);
   }
}
let city1 = new City('India', 'New Delhi');
city1.printCountry();
city1.showCity();

// static methods and static properties on the class
// static methods are CLASS METHODS and static properties are CLASS PROPERTIES
class Bike {
  static bikeModel = 'Honda';
  static printBike() {
    console.log('Printing Bike');
  }
  constructor(name) {
    this.name = name;
  }
}
class Suzuki extends Bike {
  constructor(name){
    super(name);
  }
}
let suz = new Suzuki('R15');
// suz.printBike(); // will give an error, as the method is a CLASS METHOD and not a OBJECT METHOD
Suzuki.printBike();
// suz.bikeModel; // will give an error as the property is a CLASS PROPERTY and not a OBJECT PROPERTY
console.log(Suzuki.bikeModel);


