const num = 10;
const person = {
    name: 'aditya',
};
const bool = true;

const additional = {
    username: 'tyagi',
    name: 'Sanju',
    alias: function () {
        console.log(`${this.name} ${this.username}`);
    },
};

person.__proto__ = additional;

person.alias();

// -----------------------
console.log('***************************');
// -----------------------

// Function Constructors and "new" keyword
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    console.log(this.name);
};

// the new keyword here sets the prototype of the constructor's function i.e Animal to the prototype of the newly created object.
const animal1 = new Animal('tiger');

function Dog(name, breed) {
    Animal.call(this, name); // want Animals "name" property
    this.breed = breed;
}

// want all methods of Animal class as well
// will add Animal's prototype to the Dog's instance created. It will add to the constructor of the Dog.

Dog.prototype = Object.create(Animal.prototype); // but this wil also change the Dog's constructor to Animal's constructor and that is something we don't want;

// change the constructor back to Dog's constructor
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log('Bark');
};

let dog1 = new Dog('Max', 'Lab');

// -----------------------
console.log('***************************');
// -----------------------

// Ques - what will be the output
function Vehicle() {}
Vehicle.prototype.drive = function () {
    console.log('Driving a vehicle');
};

function Car() {}

// car -> prototype -> constructor -> prototype -> Animal
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

// will NOT replace the .drive on the Vehicle.prototype, but will add to the prototype of Car.
Car.prototype.drive = function () {
    console.log('Driving a car');
};

var vehicle = new Vehicle();
var car = new Car();

vehicle.drive(); // Driving a vehicle

// the instance will first try to find .drive on its own prototype and then move to the inherited prototype
car.drive(); // Driving a car

// -----------------------
console.log('***************************');
// -----------------------

// diff. between __proto__ and prototype
/**
 * __proto__: helps to access the prototype of the object and helps in prototypical inheritance and allows accessing the prototype chain
 * prototype: it is a property that is on the constructor functions and is used to setup inheritance for the objects created by the constructor functions. Used to define property and methods on the constructor fuction which is shared by all the instances of the object
 *
 */

// -----------------------
console.log('***************************');
// -----------------------

// what is setPrototypeOf
const dogPrototype = {
    bark() {
        console.log('bark!!');
    },
};

// object.create() sets the prototype of the object to the object passed to it
let dog = Object.create(dogPrototype);

const catPrototype = {
    purr() {
        console.log('purr');
    },
};

// setting carPrototype to dog
Object.setPrototypeOf(dog, catPrototype);

// -----------------------
console.log('***************************');
// -----------------------

// what is "instanceof": it is to check if a class is an object's prototype

// Dog.prototype = Object.create(Animal.prototype);
// dog1 = new Dog();
console.log(
    'is Animal the prototype of the object dog1?',
    dog1 instanceof Animal
);

// -----------------------
console.log('***************************');
// -----------------------

// how can you create an object without prototype in JS
const obj1 = Object.create(null); // Object.create() sets the prototype of the object to the object passed to it

// -----------------------
console.log('***************************');
// -----------------------

// deep clone in js
const a = {
    name: 'aditya',
    address: {
        city: 'gurugram',
    },
};
const b = structuredClone(a);
console.log('🚀 ~ b:', b);
const c = JSON.parse(JSON.stringify(a));

function deepClone(obj) {
    // handle null and non-object arguments
    if (obj === null || typeof obj !== 'object') return obj;

    let clone = Array.isArray(obj) ? [] : {};

    // loop over object - [] and {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            clone[key] = deepClone(element);
        }
    }
    return clone;
}

const d = deepClone(a);
