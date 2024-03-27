// call
var obj = { name: 'aditya' };
function hello(age) {
    return 'hello ' + this.name + ' with the age ' + age;
}

console.log(hello.call(obj, 28)); // CALLS / INVOKES the function

// apply - like call, but the arguments to the function goes in an array
console.log(hello.apply(obj, [28])); // CALLS / INVOKES the function

// bind - does not INVOKE the function but gives us back a function that we can call with the context that we want
const helloWithUserBound = hello.bind(obj);
console.log(helloWithUserBound(25));

// -----------------------
console.log('***************************');
// -----------------------
const age = 10;

var person = {
    name: 'Piyush',
    age: 20,
    getAge: function () {
        return this.age;
    },
};

var person2 = { age: 28 };
console.log(person.getAge.call(person2)); // 24

// -----------------------
console.log('***************************');
// -----------------------

// Question 6 - What is the output?
var status = 'happy';
setTimeout(() => {
    const status = 'sad';

    const data = {
        status: 'ping',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // ping
    console.log(data.getStatus.call(this)); // happy
}, 0);

// -----------------------
console.log('***************************');
// -----------------------

// Question 6 - What is the output?
// Call printAnimals such that it prints all animals in the object
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' },
];
function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species + ' ' + this.name);
    };
    this.print();
}
for (let idx in animals) {
    printAnimals.call(animals[idx], ++idx);
}

// -----------------------
console.log('***************************');
// -----------------------

// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 8 - Append an array to another array

const arr1 = ['a', 'b'];
const arr2 = [0, 1, 2];

// .concat gives back a brand new array
const newArr2 = arr1.concat(arr2);
console.log('🚀 ~ newArr2:', newArr2);

arr1.push.apply(arr1, arr2);
console.log('🚀 ~ arr1:', arr1);

// -----------------------
console.log('***************************');
// -----------------------
// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 9 - Using apply to enhance Built-in functions
// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// loop based
let max = -Infinity,
    min = +Infinity;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if (element > max) {
        max = element;
    }

    if (element < min) {
        min = element;
    }
}
console.log([max, min]);

// enhance built in function
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

// -----------------------
console.log('***************************');
// -----------------------
// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 10 - Bound function
function f() {
    console.log(this); // window
}
let user = {
    g: f.bind(null),
};
user.g();

// -----------------------
console.log('***************************');
// -----------------------
// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 11 - Bind Chaining
function f() {
    console.log(this.name);
}
f = f.bind({ name: 'John' }).bind({ name: 'Ann' });
f(); // John, as Bind Chaining DOES NOT EXIST. ONCE A FUNCTION IS BOUND (.bind) TO A FUNCTION, then it cannot be changed

function checkPassword(success, failed) {
    let password = prompt('Password?', '');
    if (password == 'aa') success();
    else failed();
}
let user2 = {
    name: 'Piyush Agarwal',
    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },
    loginFailed() {
        console.log(`${this.name} failed to log in`);
    },
};
// checkPassword(
//     user2.loginSuccessful.bind(user2),
//     user2.loginFailed.bind(user2)
// );

// -----------------------
console.log('***************************');
// -----------------------
// pollyfill for .call, .apply and .bind

Function.prototype.myCall = function (context = globalThis, ...args) {
    // check if the function being called upon is a function
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable');
    }

    let randomProp = Math.random();
    console.log('🚀 ~ randomProp:', randomProp);

    // if the context obj have a similar key-vlue pair already, then change the randomProp
    while (context[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    // add the function being called to the randomProp key
    context[randomProp] = this;

    // get the result
    let result = context[randomProp](...args);

    // delete the function from the context
    delete context[randomProp];

    // return the result
    return result;
};

const car = {
    model: 'Test Model',
    getModel(make = 2004) {
        console.log(this.model + ' ' + make);
        // return this.model + ' ' + make;
    },
};

const truck = {
    model: 'Test Truck Model',
};

// console.log(car.getModel.myCall(truck, 9000000));

// pollyfill for .apply
Function.prototype.myApply = function (context = globalThis, args) {
    // check if the function being called upon is a function
    if (typeof this !== 'function') {
        throw new Error(this + ' is not callable');
    }

    let randomProp = Math.random();

    // check if the context have the same key with a value
    if (context[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    // store the function in the context
    context[randomProp] = this;

    // store the result
    let result = context[randomProp](...args);
    delete context[randomProp];
    return result;
};

console.log(car.getModel.myApply(truck, [90]));

// pollyfill for .bind
Function.prototype.myBind = function (context = globalThis, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'is not callable');
    }
    let randomProp = Math.random();
    if (context[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    context[randomProp] = this;

    return function (...nextArgs) {
        let result = context[randomProp](...args, ...nextArgs);
        delete context[randomProp];
        return result;
    };
};

// way 1
console.log(car.getModel.myBind(truck, 77)());

// way 2
const getModelBound = car.getModel.myBind(truck);
getModelBound(88);
