/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// method 1
// function reverseString(text){
//     return text.split('').reverse().join('');
// }


// method 2
// function reverseString(text){
//     return [...text].reverse().join('');
// }

// method 3
// function reverseString(text){
//     let result = '';
//     for(let i = text.length -1; i>=0; i--){
//         result += text[i];
//     }
//     return result;
// }


// method 4
// function reverseString(text){
//     let result = '';
//     for(const char of text){
//         result = char + result;
//     }
//     return result;
// }

// method 5
// function reverseString(text){
//     // terminal condition
//     if(text === ''){
//         return '';
//     } else {
//         return reverseString(text.substring(1)) + text[0];
//     }
// }

// method 6
function reverseString(text){
    return text.split('').reduce((acc, currentValue) => currentValue + acc, '');
}

module.exports = reverseString