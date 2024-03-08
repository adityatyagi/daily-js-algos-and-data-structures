// creates a SHALLOW copy of a "portion" of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const nums = [1, , 3, 4, 5];

// get even numbers
const originalResult = nums.filter((item) => item % 2 === 0);

console.log('original Array', nums); // doesn't change
console.log('🚀 ~ originalResult:', originalResult);

// if i change anything on the original result, it will not change the original array
originalResult[0] = 99;
console.log('original Array', nums); // doesn't change

// Pollyfill
Array.prototype.myFilter = function (cb) {
    let tempArray = [];

    for (let index = 0; index < this.length; index++) {
        const element = this[index];

        // the callback is not invoked for empty slots in sparsed arrays
        if (cb(element)) {
            tempArray.push(element);
        }
    }
    return tempArray;
};
console.log(
    '---------------------------------------------------------------'
);
let testNum = [2, 3, , 5, , 7, 8, 9, 10];
let plyResult = testNum.myFilter((item) => item % 2 === 0);
console.log('original Array', testNum); // doesn't change
console.log('🚀 ~ plyResult:', plyResult);

// if i change anything on the original result, it will not change the original array
plyResult[0] = 99;
console.log('original Array', testNum); // doesn't change
