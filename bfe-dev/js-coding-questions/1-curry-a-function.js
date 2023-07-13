// Please implement a curry() function, which accepts a function and return a curried one. - https://bigfrontend.dev/problem/implement-curry

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        } else {
            return function next(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// ------ METHOD 2 & METHOD 3 (study this, call, apply and bind) ---------
function curry2(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        }

        // just return a bounded curried() with args pre-filled
        // return curried.bind(this, ...args);

        // OR

        // create a new function which expects right number of arguments
        // and then curry it
        const boundFn = fn.bind(this, ...args);
        return curry(boundFn);
    };
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curry2(join);

console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));
