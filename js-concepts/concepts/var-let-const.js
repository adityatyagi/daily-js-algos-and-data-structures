// SCOPING - a place where the variable is defined, exist and is recognizable
// global, functional, block,
// var is "functional scope", but let and var are "block scope"

{
    const a = 5;
    console.log("🚀 ~ file: var-let-const.js:7 ~ a", a)
}

// shadowing - with the introduction of let and const in es6, variable shadowing was also introduced
// illegal shadowing: var can be shadowed by let by the opp. cannot happen - it will give an error of "variable already defined"
function test(){
    let a = 10;
    var b = 30;
    let c = 90;
    if(true){
        let a = 20; // variable shadowing
        let b = 60;
        // var c = 100; <-- this is illegal shadowing
        console.log("🚀 ~ file: var-let-const.js:18 ~ test ~ b", b)
        console.log(a); // 20 printed only inside this block
    }

    console.log(a);
}
test();

// DECLARATION
/**
 * We can re-declare var any number of times but we cannot do the same thing with let and const
 */
var b = 10;
var b = 100;
var b = 90;
let c = 90;
// let c = 100; <-- this is not allowed

// declartion without initialization
var a; // correct
let k; // correct
// const c; // <-- wrong. const cannot be declared without initialization

// RE-INITIALIZATIONS
// we can re-initialize let and var, but not const
let v=10;
v=11;
var d=80;
d=90;
const e=99;
//e=100; // not possible

// HOISTING
// To understand this, you need to understand how JS Execution Context works
/**
 * JS Execution Context
 * It consists of 2 parts - the creation phase and the exection phase
 * In Creation phase:
 *  - it creates a global or a window object 
 *  - it setups a memory heap to store variable and function references
 *  - it initializes those functions and variables with "undefined", for functions - it takes the whole function and stores
 * 
 * In Execttion Phase:
 *  - During this, the JS exectues the code line-by-line.
 *  - It assigns the variables and exectues the method/functions "line-by-line"
 *  - For every new function called, JS creates a new JS Exection Context altogether
 *  - JS also has a "call stack" - which is a mechanism to keep a track of all function calls
 *  
 * In Hoisting, JS moves the variable and function declartions to the top (during the creation phase)
 * 
 */

// this should give an error that the variable is not "declared" yet. But rather it gives "undefined" (because of the creation phase)
console.log(name); 
console.log(printName);
var name = 'Aditya';
function printName() {
    console.log('print name')
}

// hositing does not work with let and const as the let and const variables are hoisted in the "temporal dead zone"
// "Temporal Dead Zone" is the time b/w declaration and initialization of the variable (Script Tag under Sources);
// console.log(fatherName);
console.log(motherName);
var motherName = 'Rajni Tyagi';
let fatherName = 'Pawan Tyagi';

function cars24() {
    console.log("🚀 ~ file: var-let-const.js:89 ~ cars24 ~ j", j) // undefined as "j" will be hosited during creation phase and set to undefined

    // console.log(s,p); // this will give an error because s,p will be hoisted in the temporal dead zone 

    let s=10;
    const p=90;
    var j = 10;
}
cars24();
