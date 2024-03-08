// array.prototype.map
// actual implementation
let nums = [1, 2, 3, 4];
// map returns a new array without changing the old array by applying the callback to every item of the array
const numsTimes3 = nums.map((item, index, array) => {
    return item * 2;
});
console.log('🚀 ~ original array', nums); // doesnt change
console.log('🚀 ~ original result', numsTimes3); // new array

// change anything on the new array, the original array will not change
numsTimes3[0] = 0;
console.log(
    'original array after change to new array returned by .map',
    nums
);

// pollyfill -  creates a new array populated with the results of calling a provided function on every element in the calling array.
// accepts a cb and calls the cb for every element of the array upon which the .map is called
// returns a NEW array
function myMap(cb) {
    let tempArray = [];

    for (let i = 0; i < this.length; i++) {
        tempArray.push(cb(this[i]));
    }

    return tempArray;
}
Array.prototype.myMap = myMap;
const pollyfillMapResult = nums.myMap((item) => item * 2);
console.log('🚀 ~ pollyfillMapResult:', pollyfillMapResult);
