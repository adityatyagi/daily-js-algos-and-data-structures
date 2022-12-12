/*
Translate the provided string to pig latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
  // Code goes here

  str = str.toLowerCase();
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let vowelIndex = 0;

  // check if the first leter is a vowel
  if (VOWELS.includes(str[0])) {
    return str + 'way';
  } else {
    // if the first letter is not a vowel, we search for the 1st vowel in the string and get it's index
    for (let char of str) {
      if (VOWELS.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }

    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
  }

}

// console.log(pigLatin('explain'));
module.exports = pigLatin;