// sum(1)(2)(3)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(sum(1)(2)(3));

// eval("sum")(1)(2)
// eval("multiply")(1)(2)
// eval("subtract")(5)(3)
// eval("divide")(2)(4)

function eval(operation) {
    return function (a) {
        return function (b) {
            switch (operation) {
                case 'add':
                    return a + b;
                case 'subtract':
                    return a - b;
                case 'divide':
                    return a / b;
                case 'multiply':
                    return a * b;
                default:
                    throw Error('Invalid operation');
            }
        };
    };
}

console.log(eval('add')(1)(2));
console.log(eval('multiply')(1)(2));
console.log(eval('subtract')(5)(3));
console.log(eval('divide')(4)(2));

// creating a HOF (higher order function)
const add = eval('add');
console.log(add(2)(3));

// infinite currying
// sum(1)(2)(3)(4)(5)......(n)
function infiniteAdd(a) {
    return function (b) {
        if (b) return infiniteAdd(a + b);
        return a;
    };
}

console.log(infiniteAdd(2)(2)());

// currying v/s partial application
// where the number of arguments is not the same as the number functions returned
// partial function transforms another function with smaller arguments
function addPartialApplication(a) {
    return function (b, c) {
        return a + b + c;
    };
}

console.log(addPartialApplication(2)(3, 5));

const partialApp = addPartialApplication(2);
console.log(partialApp(3, 4));

// Queston: Manipulating DOM - the method will work where there is a DOM
// function updateElementText(id) {
//     return function (content) {
//         return (document.querySelector('#' + id).textContent =
//             content);
//     };
// }

// const updateHeading = updateElementText('heading');
// console.log(updateHeading('This is a new heading'));

// Ques: write a function that converts a normal function to a curry function

const functionToBeCurried = (a, b, c, d) => a + b + c + d;

// the function that takes a "different" function as an argument and returns the curried version of it
function curry(func) {
    // if the function's length is less than or equal to the arguments length, call the func
    // function length (or parameters.length) = number of times it is being called ie. func.length for sum(1)(2)(3)(4) is 4
    // currying = number of arguments = number of functions returned
    return function curriedFunction(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunction(...args, ...next);
            };
        }
    };
}

const addWithCurried = curry(functionToBeCurried);
console.log(addWithCurried(1)(2)(3)(4));
