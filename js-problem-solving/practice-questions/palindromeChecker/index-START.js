/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // METHOD 1
    // let reversedString = text.split('').reverse().join('');
    // return reversedString === text;

    // METHOD 2
    // let arrayOfChars = text.split('');
    // let result = arrayOfChars.every((element, index) => {
    //     return element === arrayOfChars[arrayOfChars.length - 1 - index];
    // });
    // return result;

    // METHOD 3
    let length = text.split('').length;
    for (let i = 0; i < length / 2; i++) {
        if (text[i] !== text[length - 1 - i]) {
            return false;
        }
    }
    return true;
}



module.exports = palindromeChecker;