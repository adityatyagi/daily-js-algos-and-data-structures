/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// BY FREQUENCY COUNTER
function areThereDuplicates(...args) {
    // base case, if there are no arguments
    if (args.length === 0) {
        return false;
    }

    let map = {};

    // iterate through the array of arguments
    for (let item of args) {
        if (map[item] && map[item] + 1 > 1) {
            return true;
        }

        map[item] = (map[item] || 0) + 1;
    }

    return false;
}

console.log(
    areThereDuplicates('a', 'b', 'c', null, undefined, undefined)
);
