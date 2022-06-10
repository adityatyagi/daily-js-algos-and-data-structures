function searchReplace(str, word, newWord) {
    // METHOD 1 - slice and replace

    // check capitalization of the word
    // if (word[0] === word[0].toUpperCase()) {
    //     newWord = newWord[0].toUpperCase() + newWord.slice(1);
    // };

    // return str.replace(word, newWord);

    // ----------------------------------------------------------------

    // METHOD 2 - regex (78% slower than Method 1)
    let regex = new RegExp(word, "gi");

    // check for capitalization
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    };

    return str.replace(regex, newWord);
}

// console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

module.exports = searchReplace