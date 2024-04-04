// function init() {
//     console.log(this); // #document
//     function name() {
//         // take this from the parent of the normal function
//         console.log(this); // Window
//     }
//     name();
// }

// // // for browsers
// document.addEventListener('DOMContentLoaded', init);

/**
 * Arrow Functions "this" points to the "parent functon's" this. Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".
 * Normal Functions "this" points to the "parent object's" this
 *
 *
 * Arrow Functions: INHERIT
 * Normal Functions: GLOBAL (by default, and if its inside another object - then that is the scope)
 */

function name() {
    // here this will target the "parent" object for this function
    console.log('🚀 ~ name ~ this:', this);
}

const printName = () => {
    function test() {
        console.log('🚀 ~ printName ~ this: ----- test', this);
    }
    test();
};

function printAddress() {
    // parent's this is the global window object here
    const getAddress = () => {
        // this targets the parent's this
        console.log('printAddress - getAddress', this);
    };
    getAddress();
}

var username = 'sushil';
const user = {
    username: this.username, // the object's "this" is the "WINDOW" object
    getDetails: () => {
        console.log(this); // will target "this" of the parent object. here the parent of the "user" object is global
    },
    getLessDetials: {
        sendDetails: () => {
            // Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". Hence, here "this" is still the WINDOW Object
            console.log('this in sendDEtails', this);
        },
        getDetails: function () {
            console.log('this is in getDEtails', this);
            const getAddress = () => {
                // this targets the parent's this
                console.log('printAddress - getAddress 2', this);
            };
            getAddress();
        },
    },
    getMoreDetails: function () {
        // in normal functions, the "this" keyword points to the "parent" object
        console.log('the name is ' + this.username); // will target "this" of the parent object i.e. user
    },
};
console.log(user.username);
console.log(user.getMoreDetails());
console.log(user.getDetails());
console.log(user.getLessDetials.sendDetails());
console.log(user.getLessDetials.getDetails());

name();
printName();
printAddress();

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        // this points to evertthing inside the constructor
        return this.name;
    }
}

const u1 = new User('Neta');
console.log(u1.getName());

// output based questions
const userMain = {
    firstName: 'Aditya',
    getName: function () {
        const firstName = 'Neta';
        console.log(this.firstName);
    },
};

console.log(userMain.getName()); // Aditya

// -----------------------
function makeUser() {
    return {
        heroName: 'John',
        ref: this.heroName, // window
        getRef: function () {
            console.log('this', this);
        },
        refFixed: function () {
            return this;
        },
    };
}
let userFromMakeUser = makeUser(); // while calling the function, the parent object is the WINDOW
console.log(
    'userFromMakeUser.ref',
    userFromMakeUser.refFixed().heroName
);

// -----------------------
console.log('***************************');
// -----------------------

const user3 = {
    nestName: 'Aditya',
    logMessage() {
        console.log(this.nestName);
    },
};

// inside setTimeout, the "user3.logMessage" is no longer being accessed as a method. It is accessed as a callback and hence the entire function is copied to the callback and hence will loose the access to the user3 object - therefore will lose the access to the this keyword

// issue
setTimeout(user3.logMessage, 1000); // WINDOW

// inside the callback, the logMessage will reference "this" to the window object
setTimeout(function () {
    // to fix the issue, we wrap the method in a function so that we no longer pass it as a callback
    user3.logMessage();
}, 1000);

// -----------------------
console.log('***************************');
// -----------------------

const greet = {
    greetName: 'Pnki',
    greet() {
        return `Hello ${this.greetName}`;
    },
    farewell: () => {
        return `Goodbye ${this.greetName}`;
    },
};

console.log(greet.greet()); //Hello Pnki
console.log(greet.farewell()); // Goodbye undefined

// -----------------------
console.log('***************************');
// -----------------------

// create an object calculator
const calculator = {
    read() {
        this.a = +prompt('a=', 0);
        this.b = +prompt('b=', 0);
    },
    add() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

// calculator.read();
console.log(calculator.add());
console.log(calculator.mul());

// -----------------------
console.log('***************************');
// -----------------------

var length = 4;

function callback() {
    // this points to the outer object - can be global (default) or if inside an object - {}, or []
    console.log(this.length);
}

const obj = {
    length: 6,
    method(fn) {
        fn();
    },
};

obj.method(callback); // 4, as the "this" in the callback points to WINDOW

const obj2 = {
    length: 6,
    method() {
        // arguments = [callback, 1, 2];
        arguments[0]();
    },
};
obj.method(callback, 1, 2); // 3, it will print the lenght of the array (object to which the "this" points to in the callback)

// -----------------------
console.log('***************************');
// -----------------------

// implement calc
const calc = {
    total: 0,
    add: function (n) {
        this.total += n;
        return this; // returns the whole object
    },
    multiply(n) {
        this.total *= n;
        return this;
    },
    subtract(n) {
        this.total -= n;
        return this;
    },
};
const result = calc.add(1).multiply(2).subtract(3).add(10);
console.log('result', result.total);
