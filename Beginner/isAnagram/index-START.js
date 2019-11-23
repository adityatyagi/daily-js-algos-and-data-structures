/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here

    // METHOD 1
    // return sanitizeString(stringA) === sanitizeString(stringB);

    // -------------------------------------------------------------------

    // METHOD 2
    if (stringA.length === stringB.length) {
        let charMapOfStringA = charMap(stringA);
        let charMapOfStringB = charMap(stringB);

        // compare the charMap values by traversing over the object keys - for...in
        for (let key in charMapOfStringA) {
            if (charMapOfStringA[key] !== charMapOfStringB[key]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}

function sanitizeString(str) {
    // ^ in Regex means Negated Set - Match any character that is not in the set
    str = str.toLowerCase().replace(/[^a-z\d]/g, '');
    return str.split('').sort().join('');
}

function charMap(str) {
    let charMap = {};

    // traversing through a string - for...of
    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    };

    return charMap;
}

// console.log(isAnagram('Scotchy is Scotch!', 'Scotch is Scotchy!'));


module.exports = isAnagram