/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here

    // generate character map
    let charMap = {};
    let maximumOccChar;
    let maxCount = 0;

    // iterate over the string values
    for(let char of text){
        if(charMap.hasOwnProperty(char)){
            // if the char is already in the object, increment by 1 on finding it again
            charMap[char]++;
        } else {
            // initialize with count 1
            charMap[char] = 1;
        }
    }

    // METHOD 1
    // iterate over the keys and get the key with max value
    // for(let key in charMap){
    //     if(charMap[key] > maxCount){
    //         maximumOccChar = key;
    //         maxCount = charMap[key];
    //     }
    // }

    // METHOD 2
    // creating arrays out of charMap
    let distinctElements = Object.keys(charMap); // returns array of all the keys
    let countOfDistinctElements = Object.values(charMap); // returns array of all the values of the keys
    maxCount = Math.max(...countOfDistinctElements);

    maximumOccChar = distinctElements[countOfDistinctElements.indexOf(maxCount)];

    return maximumOccChar;
}

// let maximumOccuringCharacter = maxRecurringChar('aabacada');
// console.log(maximumOccuringCharacter);


module.exports = maxRecurringChar;