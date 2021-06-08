// 1. Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// iterative approach
function sumTo(n) {
    let result = 0;
    for (let index = 1; index <= n; index++) {
        result += index;
    }
    return result;
}
console.log('sum in iterative', sumTo(4));

// recursive
// tail recursive function
function sumToRecursion(n) {
    // base
    if(n == 1) return n;
    return n + sumToRecursion(n-1);
}
console.log('sum in recursion', sumToRecursion(4));

// --------------------------------------------------------------------------
// 2. Calculate factorial

// iterative
function factorial(n) {
    let result = 1;
    for(let index=1; index<=n; index++) {
        result = result * index;
    }
    return result;
}
console.log('factorial in iterative', factorial(3));

// recursive
function factorialRecursive(n) {
    // base / trivial case
    if(n === 1) return n;
    return n * factorialRecursive (n-1);
}
console.log('factorial in recursive', factorialRecursive(3));

// --------------------------------------------------------------------------
// 3. Fibonacci numbers
// sum of last 2 numbers is the next number
// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + ...

// iterative
/*
 will be working on the principle of moving pointers a, b, c where
 a = 1st number
 b = 2nd number
 c = result
*/

function fibonacciIterative(n) {
    let a = 1; // fibo(1)
    let b = 1; // fibo(2)
    for(let i = 3; i <= n; i++) {
        let c = a + b;

        // move the pointers by 1
        a = b;
        b = c;
    }
    return b;
}
console.log('fibonacci in iterative',fibonacciIterative(7));

// recursive
function fibonacciRecursive(n) {
    // base case
    if (n===1 || n===2) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n-2);
}
console.log('fibonacci in recursive',fibonacciRecursive(7));

// --------------------------------------------------------------------------
/**
 * 4. Output a single-linked list
 * Write a function printList(list) that outputs list items one-by-one.
 */

// single-linked list
 let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// iterative
function printList(list) {
    let temp = list;
    while(temp) {
        console.log(temp.value + ', ');
        temp = temp.next;
    }
}
console.log('Print single-linked list in iteration', printList(list));

// recursive
function printListRecursive(list) {
    console.log(list.value);
    if(list.next) {
        return printListRecursive(list.next);
    }
}
console.log('Print single-linked list in recursion', printListRecursive(list));


// --------------------------------------------------------------------------
/**
 * 5. Output a single-linked list in the reverse order
 */

// iterative
function printListReverseIterative(list) {
    let tempValues = [];
    let temp = list;
    while(temp) {
        tempValues.push(temp.value);
        temp = temp.next;
    }

    // print in reverse
    for(let i=tempValues.length; i >=0; i--) {
        console.log(tempValues[i]);
    }
}
console.log('list in reverse', printListReverseIterative(list));

// recursion
function printListReverseRecursive(list) {
    if(list.next) {
        printListReverseRecursive(list.next);
    }
    console.log(list.value);
}
console.log(printListReverseRecursive(list));




