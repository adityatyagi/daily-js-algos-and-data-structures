// https://medium.com/@ajmeyghani/interview-questions-1145e3763bce

// 'use strict';
const user = {
    id: 551,
    name: 'Tom',
    getId() {
        return this.id;
    },
    credentials: {
        id: 120,
        username: 'tom',
        getId() {
            return this.id;
        },
    },
};

console.log(user.credentials.getId());
const getId = user.credentials.getId;
console.log(getId());

/**
 * Certainly! Let's delve deeper into the concept of the `this` keyword and how it behaves in JavaScript.

In JavaScript, the value of the `this` keyword is determined by how a function is called. When you have a method like `user.credentials.getId` and then assign it to a variable `getId`, the function loses its original context. When you later call `getId()`, it's no longer associated with the `user.credentials` object, and the `this` keyword inside the function no longer refers to `user.credentials`.

Here's a step-by-step breakdown:

1. **Declaration and assignment:**
   ```js
   const getId = user.credentials.getId;
   ```
   At this point, you're assigning the `getId` method from `user.credentials` to a variable. However, `getId` is just a reference to the function, and it's not bound to any specific object.

2. **Invocation:**
   ```js
   console.log(getId());
   ```
   When you call `getId()` here, the function is executed, but it's not called as a method of any object. As a result, the `this` keyword inside the `getId` function becomes undefined or refers to the global object (in non-strict mode), not the `user.credentials` object.

To illustrate further, imagine the original method call within the context of `user.credentials`:

```js
console.log(user.credentials.getId()); // This would correctly print 120
```

By assigning the method to a standalone variable (`getId`), you detach it from its original context, and the `this` binding is lost when the function is invoked independently. To address this issue, you can use the `bind` method or an arrow function to explicitly set the context for the function.
 */

console.log(
    '--------------------------------------------------------------'
);
const fn = function () {};
console.log(typeof fn); // function

console.log(
    '--------------------------------------------------------------'
);
// function hello() {
//     setTimeout(function() {
//       console.log('printing in hello', this.name); // undefined
//     }, 100);
//   }
function hello() {
    setTimeout(() => {
        console.log('printing in hello', this.name); // tom
    }, 100);
}
hello.call({ name: 'tom' });

/**
 * In the snippet above, console.log is called inside an anonymous callback function passed to setTimeout. In this case, the callback function will create a context that is not explicitly set. In non-strict mode, this will be set to the global object. Even if we are calling the hello function with call and we are setting the context of hello to {name: 'tom'}, the callback function will not use the same context as the hello function and it will look for the name property on the global object. If a name property is defined it will return the value, otherwise it will log undefined. In order to use the same context as the hello function, we can use an arrow function or set this to another variable:
 */

// Describe what a debounce higher order function does and when you may want to use it?
/**
 * A debounce higher order function takes a function and returns a new version of the function that is callable with a certain delay. For example, when you have input in a form and you want to have a certain delay between the time that a user is typing and the time that they are not, you can debounce the event handler to be called only if the delay condition is met. For example, if the debounce is set to 200ms, the event handler will only be called if there is at least 200ms between the last time that the user typed something and the last time that they didn’t.
 */

// How can you spread arguments when calling a function? For example, Math.max takes a variable number of arguments and returns the largest value. Given an array for example, how can we spread the values when calling Math.max?
const nums = [1, 2, 3];
const max = Math.max(...nums); // ES2015
const max2 = Math.max.apply(null, nums); // prior to ES2015 - Note that we set the first argument to null, because we don’t want to define a context for the max method.

//The following code won’t print the persons's name? Can you explain why? And how can we fix it?
function Person(name) {
    this.name = name;
}
Person.prototype.getName = () => {
    return this.name;
};
const tom = new Person('Tom');
console.log('tom.getName()', tom.getName());
/**
 * The reason is that the snippet above is using an arrow function for getName. Arrow functions cannot create a context and therefore this will be the global object in non-strict mode. To solve this, we can simply use a non-arrow function for getName:
 */

console.log('-------------------CLOSURES--------------------------');
// CLOSURES
// Looking at the snippet below, what could be one possible implementation of the makeAdd function?

const addTwo = makeAdd(2);
console.log(addTwo(3)); // -> 5

const addTen = makeAdd(10);
console.log(addTen(30)); // -> 40

function makeAdd(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

// How can we define a function that takes a function as argument and returns a new version of the function that can be called only once?
function callOnce(fn) {
    let count = 0;
    return function () {
        count += 1;
        if (count > 1) return;
        return fn();
    };
}

// function callOnceSimple(fn){
//   let count = 0;
//   return () => ++count > 1 ? undefined : fn();
// }

function printName() {
    console.log('aditya Tyagi');
}
const printWillBeCalledOnce = callOnce(printName);
printWillBeCalledOnce();
printWillBeCalledOnce();
printWillBeCalledOnce();
printWillBeCalledOnce();

// What happens when we run the following snippet? In other words, what happens when we try to log n to the console?

const r = (() => {
    const n = 1;
    const m = 2;
    return n + m;
})();
// console.log(n); // ReferenceError
console.log(r); // 3

// We will get a ReferenceError because all the variables are defined inside a self-invoked function that creates a closure around the variables. And trying to log the value of n outside of the closure we will get a reference error because the variable are not available outside of the function.

console.log(
    '------------------------Prototype---------------------------------'
);

// What happens when you call a function with the new keyword?

/**
 * When a function is called with the new keyword, couple of things happen behind the scenes:

A new empty object is created
The context object "this" is bound to the new empty object
The new object is linked to the function’s prototype property
"this" is automatically returned unless another value is returned explicitly from the function

This is the mechanism provided by JavaScript to link objects with prototype objects.
 */

function GetName() {}
const getNameObj = new GetName();
console.log(GetName.prototype);
console.log('🚀 ~ getNameObj:', getNameObj);

// Given the following classes and prototype relationships:
class Person2 {}
class Employee extends Person2 {}
class Developer extends Employee {}
const dev = new Developer();

console.log(Object.getPrototypeOf(dev) === Developer.prototype); // true (is it directly linked to Developer.prototype)
console.log(Object.getPrototypeOf(dev) === Employee.prototype); // true (is it directly linked to Employee.prototype)
console.log(Developer.isPrototypeOf(dev)); // false (if the constructor function Developer appears anywhere in dev's prototype chain)
console.log(Developer.prototype.isPrototypeOf(dev)); // true
console.log(Employee.prototype.isPrototypeOf(dev)); // true
console.log(Person2.prototype.isPrototypeOf(dev)); // true
console.log(Object.prototype.isPrototypeOf(dev)); // true

// What is the difference between the classical and the prototypical inheritance?
//  Answering this question is kind of tricky because both types of inheritance have the same effect, but the mechanism by which they achieve it is different. In JavaScript every object has a prototype object. These prototype objects are live objects that can be changed at any point in time. The most important thing to know about prototype objects is that they can be linked with each other to create chains. JavaScript internally can traverse these chains and look for methods and properties. So if you ask a random object about a property or method, it’s going to traverse the chain to find them. It will first look at the object itself and if it can’t find it there it will keep looking until it hits null. If it hits null and cannot find the value, it will return undefined. That is main different between classical inheritance and prototypical inheritance. In JavaScript inheritance is achieved by traversing prototype chains, as opposed to class blueprints that define rigid and non-dynamic inheritance relationships.

// After an object is created, for example using the new keyword, how can we access the prototype object that the instantiated object is linked to?
function Car() {}
const car = new Car();
console.log(Object.getPrototypeOf(car));

//What is the equivalent of the following class in ES5?
// class Company {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         return 'hello ' + this.name;
//     }
// }

// class Robot extends Company {
//     constructor(name, title) {
//         super(name);
//         this.title = title;
//     }
//     getTitle() {
//         return this.title;
//     }
// }

function Company(name) {
    this.name = name;
}
Company.prototype.hello = function hello() {
    return 'hello ' + this.name;
};

const c1 = new Company('sivana ltd');

function Robot(name, title) {
    Company.call(this, name); // extended only name from the parent
    this.title = title;
}

// to extend Robot extends Company
Robot.prototype = Object.create(Company.prototype);
// Robot.prototype.constructor = Robot;
Robot.prototype.getTitle = function getTitle() {
    return this.title;
};

const r1 = new Robot('aditya', 'sivana ltd');
console.log(Object.getPrototypeOf(r1));
console.log(r1.hello());
console.log(r1.getTitle());
console.log(r1.name);

// Given the following two functions:
const a = () => {};
function B() {}

// What will be the values of each line in the following snippet:
typeof a; // A
typeof B; // A
Object.getPrototypeOf(a); // B
Object.getPrototypeOf(B); // B
a.prototype; // C
console.log('🚀 ~ a.prototype:', a.prototype);
B.prototype; // C
console.log('🚀 ~ B.prototype:', B.prototype);
