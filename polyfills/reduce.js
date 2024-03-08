const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce returns the accumulated result of the array items. It also does not change the old array
const sumOfAllItems = num.reduce((acc, current, index, array) => {
    acc += current;
    return acc;
}, 0);
console.log('original Result', sumOfAllItems);
console.log('original array does not change', num);
console.log('-------------------------------------------------');

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;
    for (let index = 0; index < this.length; index++) {
        // the first time the cb runs and there is an initial value i.e. acc, then we use that as the result of the calculation of cb on the preceding element, if not, we'll use the first element of the array and the cb will be called from index 1
        acc = acc ? cb(acc, this[index], index, this) : this[index];
    }

    return acc;
};
plyNums = [10, 20, 30, 40, 50];
const plyResult = plyNums.myReduce((acc, current) => {
    acc += current;
    return acc;
}, 0);
console.log('pollyfill Result', plyResult);
console.log('pollyfill array does not change', plyNums);
