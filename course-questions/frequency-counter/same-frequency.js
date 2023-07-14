/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2) {
    // if there are no 2 integers
    if (num1 === undefined || null || num2 === undefined || null) {
        return;
    }

    // the 2 numbers will have same frequency if there are same number of digit i.e. length
    let num1InStr = num1.toString();
    let num2InStr = num2.toString();

    if (num1InStr.length !== num2InStr.length) {
        return false;
    }

    // create a map for num1 where the keys of object will be the integer
    let map1 = {};
    for (let char of num1InStr) {
        map1[char] = (map1[char] || 0) + 1;
    }

    // iterate over the second string, and then find the character in the map1. If present, then decrement the count, and if not present return false i.e. the two numbers do not have same frequency
    for (let char of num2InStr) {
        // if the map1 does not contain the character or the count is 0
        if (!map1[char]) {
            return false;
        }

        map1[char] -= 1;
    }

    return true;
}

console.log(sameFrequency(909, 281)); // true
