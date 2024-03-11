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

// BY Multiple Pointers
function areThereDuplicates(...args) {
    // check if there are no numbers in the arguments
    if (args.length === 0) return false;

    let i = 0;
    let j = 1;

    while (j < args.length) {
        if (args[i] === args[j]) {
            return true;
        }

        // if j has reached second last element in the array
        if (j + 1 === args.length) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', undefined));
