// lexical scope - a variable defined in the global scope can be accessed in the local scope
var username = 'Aditya';
function localScope(){
    console.log(username);
}
localScope();


function fun1(){
    var a = 10;
    function fun2(){ // closure
        console.log(a);
    }
    return fun2;
}
const fun3 = fun1();
fun3();

// closure scope chain
// local scope, outer function's scope, global scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake 
let count = 0;
(function (){
    if(count === 0){
        let count = 1; // shadowing
        console.log(count);
    }
    console.log(count);
})();


function createBase(baseNumToAdd){
    return function(newNumToAdd){
        return newNumToAdd + baseNumToAdd;
    }
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

function find(i){
    let a =[];
    for (let index = 0; index < 1000000; index++) {
        a[index] = index * index;
    }
    console.log(a[i]);
}
console.time("6");
console.log(find(6));
console.timeEnd("6");

console.time("50");
console.log(find(50));
console.timeEnd("50");

console.log('**********');
function betterFind(){
    let a =[];
    for (let index = 0; index < 1000000; index++) {
        a[index] = index * index;
    }

    return function(i){
        console.log(a[i]);
    }
}

const closure = betterFind();

console.time("6");
console.log(closure(6)); // the complete a array is not being made again and again
console.timeEnd("6");

console.time("50");
console.log(closure(50));
console.timeEnd("50");

/**
 * 
36
undefined
6: 29.468ms
2500
undefined
50: 28.744ms
**********
36
undefined
6: 0.406ms
2500
undefined
50: 0.152ms
 */


function closureQues1(){
    for (var index = 0; index < 3; index++) {
        setTimeout(() => {
            console.log(index);
        }, index * 1000);
    }
}

closureQues1();

