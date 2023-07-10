/* CHALLENGE
Given a sentence, return the longest word in the string
*/



function longestWord(text) {
    // Code goes here

    // METHOD 1 - for loop
    // let allWords = text.split(' ');
    // let maxLength = 0;
    // let maxLengthWord = '';

    // for (let i = 0; i < allWords.length; i++) {
    //     if (allWords[i].length > maxLengthWord.length) {
    //         maxLengthWord = allWords[i];
    //         maxLength = allWords[i].length;
    //     }
    // }

    // return maxLengthWord;

    // ---------------------------------------------------------------

    // METHOD 2 - reduce
    // let result = text.split(' ').reduce((acc, currentValue) => {
    //     if (acc.length > currentValue.length) {
    //         return acc;
    //     } else {
    //         return currentValue;
    //     }
    // }, "");

    // return result;

    // ---------------------------------------------------------------

    // METHOD 3 - sort()
    let sortedWordsInDescOrder = text.split(' ').sort((a, b) => {
        // if return value is positive - b comes before a
        // if return value is negative - a comes before b
        // if return value is 0 - the order of a and b remains unchanged
        return b.length - a.length;
    });

    return sortedWordsInDescOrder[0];
}

// console.log(longestWord('Top Shelf Web Development Training on Scotch'));

module.exports = longestWord