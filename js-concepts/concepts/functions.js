/**
 * Functions
 * - function declaration, statement, defination - same thing - normal function
 * - function expression - a function assigned to a variable
 * - First class functions - in JS we can treat a function just like a variable - pass it to other functions, used, manipulated, returned from it
 * In a language where a function can be treated like a variable
 * 
 */

function square(num) {
    return num*num;
}
function printSquare(fn) {
    console.log(fn(5));
}

// passing a function just like a variable is passed
printSquare(square);

// IIFE: Immediately invoked function expression
(function cube(num) {
    console.log(num*num*num);
})(3);

(function (x) {
    return (function (y) {
        console.log(x);
    })(2)
})(1)
console.log('---------');
// for (let index = 0; index < 5; index++) {
//    setTimeout(() => {
//     console.log(index);
//    }, index * 1000);
// };

test();
function test(){
    console.log('inside test', x);
    var x = 5;
}


var x=21;
var fun = function (){
    // will x be undefined or x will be 21
    console.log(x);
    var x=10;
}
fun();

// params v/s arguments
function multiple(num, num2) { // params
    return num*num2;
};
function multiple2(...args) { // params with rest operator
    return args[0]*args[1];
};

let s = [3,2];
console.log(multiple2(...s)); // arguments with spread operator

//  Rest parameter must be last formal parameter
// const func = (a, ...numbers, b, c) => {
//     console.log(x,y);
// }
// let f = [1,2,3,4,5]
// func(...f)

// callback
function processUserInput(callback){
    const name = 'Aditya';
    callback(name);
}

function gretting(name){
    console.log('Hello', name);
}

processUserInput(gretting); // passing the function as an argument to another function

// examples of callback - setTimeout, map, filter, reduce, all takes a callback


// Arrow functions - ES6
// Simiar to normal functions but works differently
const add = function(n,m){
    return n+m;
}

// arrow function
const addArrow = (n,m) => {
    return n+m;
}

console.log("🚀 ~ file: functions.js:97 ~ add(1,2)", add(1,2))
console.log("🚀 ~ file: functions.js:93 ~ addArrow", addArrow(1,2))

// difference b/w the two types of functions
// 1. syntax + implict return
// 2. arguments - we donot have arguments keyword inside the arrow function
// 3. "this" keyword
function diff() {
    console.log(arguments);
}

const diff2 = () => {
    console.log(arguments);
}

diff(1,2,3);
// diff2(1,2,3);

let user  = {
    name: 'adita',
    rc1: () => {
        /**
         * user.rc1(): is not defined
         */
        console.log(this.name); // this here refers to the "this" in the global scope
    },
    rc2: function () {
        /**
         * user.rc2(): is defined
         */
        console.log(this.name); // this here refers to the "this" object i.e. user
    }
};

const user2 = {
    name: 'Pnky'
};
user.rc1()
user.rc2()