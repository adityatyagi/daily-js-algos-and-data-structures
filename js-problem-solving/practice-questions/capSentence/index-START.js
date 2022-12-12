/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // Code goes here

  // METHOD 1 - using ForEach
  // let lowerCaseString = text.toLowerCase().split(' ');
  // let capsArray = [];
  // lowerCaseString.forEach(word => {
  //   capsArray.push(word[0].toUpperCase() + word.slice(1));
  // });
  // return capsArray.join(' ');


  // METHOD 2 - using map and slice
  // let lowerCaseString = text.toLowerCase().split(' ');
  // let capsArray = [];
  // capsArray = lowerCaseString.map(word => {
  //   return word[0].toUpperCase() + word.slice(1);
  // });
  // return capsArray.join(' ');

  // METHOD 3 - using map and replace
  let lowerCaseString = text.toLowerCase().split(' ');
  let capsArray = lowerCaseString.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  return capsArray.join(' ');
}



module.exports = capSentence