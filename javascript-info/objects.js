// "use strict";

function printObj(obj) {
  console.log(JSON.stringify(obj, null, 2));
}
// Object property flags and descriptors

let person = {
  name: 'Aditya'
}

let objDescriptorForName = Object.getOwnPropertyDescriptor(person, 'name');

// add a new property to object
Object.defineProperty(person, 'age', {
  value: 25
})

let objDescriptorForAge = Object.getOwnPropertyDescriptor(person, 'age');
printObj(objDescriptorForAge);

// making a particular property "non-writable"
Object.defineProperty(person, 'name', {
  writable: false
});
person.name = 'Ayush'; // no effect (Gives error in strict mode in js)
printObj(person);


// Ignoring a property,method in loop
person.fullAddress = function() {
  return 'London Street 23/45';
}

Object.defineProperty(person, 'fullAddress2', {
  value: function() {
    return 'Paris';
  },
  enumerable: false,
  configurable: true
})

// want to keep the fullAddress private
for(const key in person) {
  if(person.hasOwnProperty(key)) {
    console.log(key);
    // will only print name and fullAddress as the other two have "enumerable" property as false by default
  }
}

// Non-Configurable - cannot be deleted - is a ONE WAY ROAD
// once configuration flag is set, you cannot un-configure it
Object.defineProperty(person, 'school', {
  value: 'BIS',
  configurable: false, // cannot be deleted
  writable: false, // cannot be modifed, once this configuration is set i.e. true -> false will not be possible
  enumerable: true // present in loops
});

delete person.school; // will have no effect. Will give error in strict mode

person.school = 'CRJ';

printObj(person);


// Object.defineProperties()
let laptop = {};
Object.defineProperties(laptop, {
  brand: {
    value: 'dell',
    enumerable: true
  },
  size: {
    value: 15.6,
    enumerable: true
  }
});
printObj(laptop);

// Creating a clone of the object WITH the property flags
let person2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person));
// checking the decriptors on person2
let person2Descriptor = Object.getOwnPropertyDescriptor(person2, 'name');
console.log("file: objects.js ~ line 85 ~ person2Descriptor", person2Descriptor)
printObj(person2);

// Sealing objects globally
Object.freeze(person); // no adding/removing/changing
Object.seal(person2); // no adding/removing but can change
Object.preventExtensions(person); // no adding of new properties

// tests
Object.isFrozen(person);
Object.isSealed(person2);
Object.isExtensible(person);

// ----------------------------------------------------------------------
// JS Objects - property getters and setters
let mobile = {
  company: 'OnePlus',
  model: '8',
  get mobileName() {
    return `${this.company} ${this.model}`;
  },
  set mobileName(value) {
    [this.company, this.model] = value.split(' ');
  }
}
mobile.mobileName = 'OnePlus 7'
console.log(mobile.mobileName);

// Accessor descriptors
// get, set, configurable, enumerable
Object.defineProperty(mobile, 'color', {
  get() {
    return this._color;
  },
  set(value) {
    if(value.length < 2) {
      alert('length of color should be greater than 2');
      return;
    }
    this._color = 'Color of mobile is ' + value;
  },
  enumerable: true
});
mobile.color = 're';
console.log(mobile);



