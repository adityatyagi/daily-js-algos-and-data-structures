/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here

    // using iterative approach
    // let counter = 0;
    // let vowels = ["a", "e", "i", "o", "u"];
    // for(let char of text.toLowerCase()){
    //     if(vowels.includes(char)){
    //         counter++;
    //     }
    // }
    // return counter;



    // using regex
    let matchingInstances = text.match(/[aeiou]/gi);
    if(matchingInstances){
        return matchingInstances.length;
    } else {
        return 0;
    }
}



module.exports = vowelsCounter;
