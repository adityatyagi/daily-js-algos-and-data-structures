/**
 * 2. implement curry() with placeholder support: https://bigfrontend.dev/problem/implement-curry-with-placeholder
 * ref: https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
 */

// -------------- METHOD 1 ---------------------
function curry(func) {
    return function curried(...args) {
        // we need to return a function to make it curry-able.

        // 1. If the arguments are extra then eliminate them
        // we don't want to pass 6 arguments when the expected is 3.
        // it will interfere with our placeholder logic
        const sanitizedArgs = args.slice(0, func.length);

        // see if placeholder is available in arguments
        const hasPlaceholder = sanitizedArgs.some(
            (arg) => arg === curry.placeholder
        );

        // if no placeholder and arguements are equal to what expected then it is normal function call
        if (!hasPlaceholder && args.length >= func.length) {
            return func.apply(this, sanitizedArgs);
        }

        // else we need to replace placeholders with actual values
        // we call helper function `mergeArgs` for this
        // we pass first and next arguments to helper function
        return function next(...nextArgs) {
            return curried.apply(
                this,
                mergeArgs(sanitizedArgs, nextArgs)
            );
        };
    };
}

function mergeArgs(args, nextArgs) {
    let result = [];

    // iterate over args (because we need to replace from it)
    // in each iteration, if we find element == curry.placeholder
    // then we replace that placeholder with first element from nextArgs
    // else we put current element

    // 2 pointer
    let i = 0;
    let j = 0;

    // iterate over args and nextArgs
    while (i < args.length && j < nextArgs.length) {
        if (args[i] == curry.placeholder) {
            result.push(nextArgs[j]);
            i += 1;
            j += 1;
        } else {
            result.push(args[i]);
            i += 1;
        }
    }

    // add the leftovers from both the arrays
    while (i < args.length) {
        result.push(args[i]);
        i += 1;
    }

    while (j < nextArgs.length) {
        result.push(nextArgs[j]);
        j += 1;
    }

    return [...result];
}

// -------------- METHOD 2---------------------
function curry2(func) {
    return function curried(...args) {
        if (
            args.length >= func.length &&
            args
                .slice(0, func.length)
                .every((item) => item !== curry.placeholder)
        ) {
            return func.call(this, ...args);
        } else {
            return function (...nextArgs) {
                const mergeArgs = args.map((item) =>
                    item === curry.placeholder && nextArgs.length
                        ? nextArgs.shift()
                        : item
                );

                return curried.call(this, ...mergeArgs, ...nextArgs);
            };
        }
    };
}

curry.placeholder = Symbol();

// test
const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};

const curriedJoin = curry2(join);
const _ = curry.placeholder;

// console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2)(3));
console.log(curriedJoin(_, _, _)(1)(_, 3)(2));
console.log(curriedJoin(_, 2)(1, 3));

/**
 * 
 * 
(1)(2)(3)  

(1, 2)(3)  

(1, 2, 3, 4)  

(1,2)(3), (1,2)(4)  

should have property 'curry.placeholder'  

(_,_,3,4)(1,_)(2,5)  

(_,_,_,_)(_,2,_)(_,3)(1)  

(1)(_,3)(2)  

*/
