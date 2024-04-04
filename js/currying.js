function init() {
    // turn f(a,b) into f(a)(b)

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

    function sum(num1, num2) {
        return num1 + num2;
    }

    // sum(1,2) -> sum(1)(2);
    const curriedSum = curry(sum);
    console.log(curriedSum(1)(2));
    // console.log(curriedSum(1, 2));
    // console.log(curriedSum(1)(2)(3)); // curriedSum(1)(2) does not return a new function expecting the next argument and hence this gives an error

    // infinite curry
    function add(a) {
        return function nextAdd(b) {
            if (b) return add(a + b);
            return a;
        };
    }
    console.log(add(2)(3)(4)(5)());

    // Solve for curry: sum(1)(2)(3)…(n)() - add(1,2..n)(5,6…n)…(n)()
    // solve for add(1,2,3,4....n)(5,6,7,8...n)()
    function add(...args) {
        let a = args.reduce((acc, curr) => acc + curr, 0); // sum of the 1st set of args i.e. 1,2,3,4...n
        return function (...nextArgs) {
            let b = nextArgs.reduce((acc, curr) => acc + curr, 0); // sum of the 2nd set of args i.e. 5,6,7,8...n

            // base case - if b is PRESENT, i.e we have not reached the final one without argument
            if (b) {
                return add(a + b);
            }
            return a; // will be the SUM OF ALL CALLS
        };
    }

    // partial application - converting a funtion of large arity into smaller but not exactly one. given that we have multi-parameter functions, we want to fix certain parameters of a function.
    // function sumPA(a,b,c) -> sumPA(a)(b,c)
    /**
     * 
     *  int foo(int a, int b, int c) {
         return a + b + c;
        }
        int foo23(int a, int c) {
            return foo(a, 23, c);
        }


        Note that currying offers a very natural way to implement certain partial applications. If I want to partially apply foo by fixing its first parameter to5, all I need to do is var foo5 = foo(5). There – done. foo5 is our partially applied foo.

        Partial application is just taking a function, fixing some of its parameters, and getting a new function.

        Currying is a way of using anonymous single-parameter functions to implement multi-parameter functions.
     */

    // example: manipulating DOM
    // to update the text in an HTML node
    function selectHeader(id) {
        return function (content) {
            document.querySelector('#' + id).textContent = content;
        };
    }

    const updateHeader = selectHeader('heading');
    updateHeader('hello');
    setTimeout(() => {
        updateHeader('bye');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', init);
