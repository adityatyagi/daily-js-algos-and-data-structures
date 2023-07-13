// give two strings, write a function to determine if the second string is an anagram of the first
// Time Complexity - O(n)

function validAnagram(str1, str2) {
    // if the length of the str1 is not same as the length of the str2
    if (str1.length !== str2.length) {
        return false;
    }

    let mapStr1 = {};
    let mapStr2 = {};

    for (let char of str1) {
        mapStr1[char] = (mapStr1[char] || 0) + 1;
    }

    for (let char of str2) {
        mapStr2[char] = (mapStr2[char] || 0) + 1;
    }

    // iterate over mapStr1 keys
    for (let key in mapStr1) {
        if (!(key in mapStr2)) {
            return false;
        }

        if (mapStr2[key] !== mapStr1[key]) {
            return false;
        }
    }

    return true;
}

// METHOD 2
function validAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    // loop over str1 characters
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        // create the lookup object with the char of the str1 as keys
        lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
    }

    // loop over str1
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!lookup[char]) {
            return false;
        }

        lookup[char] -= 1;
    }
    return true;
}

console.log(validAnagram2('qwerty', 'qwetray'));
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('', '')); // true
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(
    validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')
); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext'));
