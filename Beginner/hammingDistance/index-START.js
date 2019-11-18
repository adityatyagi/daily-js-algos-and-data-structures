/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    // Code goes here
    let result = 0;
    if (stringA.length == stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            console.log('A ' + 'i: ' + i + ' with value ' + stringA[i]);
            console.log('B ' + 'i: ' + i + ' with value ' + stringB[i]);
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                result++;
            }
        }
        return result;
    } else {
        throw new Error('The two strings are not of equal length');
    }
}

// console.log(hammingDistance('river', 'rover'));

module.exports = hammingDistance