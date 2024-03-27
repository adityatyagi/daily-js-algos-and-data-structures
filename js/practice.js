// for map

Array.prototype.myMap = function (cb) {
    let tempArray = [];
    for (let i = 0; i < this.length; i++) {
        tempArray.push(cb(this[i]));
    }
    return tempArray;
};

Array.prototype.myFilter = function (cb) {
    let tempArray = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            tempArray.push(this[i]);
        }
    }
    return tempArray;
};

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
};

const num = [1, 2, 3, 4];
const filteredNum = num.myReduce(function (acc, curr) {
    acc += curr;
    return acc;
}, 0);
console.log('🚀 ~ filteredNum ~ filteredNum:', filteredNum);
