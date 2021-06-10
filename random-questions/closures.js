function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let count = makeCounter();
console.log(count());

// -----------------------------
// Sum with closures
/**
 * Write function sum that works like this: sum(a)(b) = a+b.

    Yes, exactly this way, using double parentheses (not a mistype).

    For instance:

    sum(1)(2) = 3
    sum(5)(-1) = 4
 */

function sum(a) {
    return function(b) {
        console.log(a+b);
        return a+b;
    }
}
sum(2)(3);
