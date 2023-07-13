// polyfills for map, filter and reduce

// actual implementation
let nums = [1,2,3,4];
// map returns a new array without changing the old array by applying the callback to every item of the array
const numsTimes3 = nums.map((item, index, array) => {
    return item*2;
});
console.log(numsTimes3);

// filter returns a new array without changing the old array with items that result to true for the callback passed
const evenItems = nums.filter((item, index, array) => {
    return item%2===0;
});
console.log(evenItems);

// reduce returns the accumulated result of the array items. It also does not change the old array
const sumOfAllItems = nums.reduce((acc, current, index, array) => {
    acc += current;
    return acc;
}, 0);
console.log(sumOfAllItems);


// ------------- POLYFILLS ------------
// MAP
Array.prototype.myMap = function (cb) {
    // returns a new array
    let temp = [];

    // for every item, pass it through the cb, where "this" is the array
    for(let i=0; i<this.length; i++) {
        temp.push(cb(this[i]));
    };

    return temp;
}

console.log(nums.myMap((item) => item *2));


// FILTER
Array.prototype.myFilter = function(cb) {
    // returns a new array
    let temp = [];

    // checks each item in the array if it passes the cb with true
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            temp.push(this[i]);
        }
    };

    return temp;
}

console.log(nums.myFilter((item) => item%2 === 0));

// returns the accumulated value
Array.prototype.myReduce = function (cb, initialValue) {
    // accumulator
    let acc = initialValue;
    
    for (let index = 0; index < this.length; index++) {
        // if the acc is there, then call the callback, else for the first loop, set acc to the first item in the array
        acc = acc ? cb(acc, this[index], index, this) : this[index];
    }
    return acc;
}

const sumOfAllItemsMine = nums.myReduce((acc, current, index, array) => {
    acc += current;
    return acc;
}, 0);
console.log(sumOfAllItems);

// the difference b/w map and forEach
/**
 * forEach does not return any new array. it just applies the cb to the array items. To return the array - it will change the exisitng array
 * we can also chain array methods in map but we cannot do the same in forEach
 */

let nums2 = [1,2,3,4];
const mapNum = nums2.map(item => item*2);
console.log("🚀 ~ file: map-filter-reduce.js:84 ~ mapNum", mapNum)
const forEachNum = nums2.forEach(item => item*2);
console.log("🚀 ~ file: map-filter-reduce.js:86 ~ forEachNum", forEachNum)

// to return something from the forEach
const forEachNums2 = nums2.forEach((item, i) => {
    nums2[i] = item*2
});
console.log("🚀 ~ file: map-filter-reduce.js:92 ~ forEachNums2 ~ forEachNums2", nums2);

// ------- QUESTIONS on MAP, FILTER and REDUCE -------
let students = [
    {
        name: 'Aditya',
        rollNo: 1,
        marks: 10
    },
    {
        name: 'Ayush',
        rollNo: 2,
        marks: 11
    },
    {
        name: 'Piyush',
        rollNo: 3,
        marks: 20
    },
    {
        name: 'Rajni',
        rollNo: 3,
        marks: 21
    }
];

// Sum of marks of all students
let sumOfMarksOfAllStudents = students.reduce((acc, currentVal, index) => {
    return acc + currentVal.marks;
}, 0)
console.log("🚀 ~ file: map-filter-reduce.js:123 ~ sumOfMarksOfAllStudents ~ sumOfMarksOfAllStudents", sumOfMarksOfAllStudents);

// Name of students who scored marks more than 11
let selectedStudents = students.filter((item) => item.marks > 11).map(item => item.name);
console.log("🚀 ~ file: map-filter-reduce.js:127 ~ selectedStudents", selectedStudents);

// Return total marks for students with marks greater than 11 after 5 marks have been added to those who scored less than 11
let selectedHighStudents = students.map((item) => {
    if(item.marks < 11) {
        item.marks += 5;
    }
    return item;
})
.filter((item) => item.marks > 11)
.reduce((acc, item) => {
    return acc + item.marks;
}, 0);
console.log("🚀 ~ file: map-filter-reduce.js:139 ~ selectedHighStudents ~ selectedHighStudents", selectedHighStudents)








