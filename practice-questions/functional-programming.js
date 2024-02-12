const radius = [1,2,3,4];

const calculateArea = (radius) => {
    // array of areas
    let output = [];

    for (let index = 0; index < radius.length; index++) {
        output.push(Math.PI * radius[index] * radius[index]);
    }

    return output;
}

// console.log(calculateArea(radius));


const area = function(r){
    return Math.PI * r * r;
}

const circumference = function(r){
    return 2 * Math.PI * r;
}

const diameter = function(r){
    return 2*r;
}


const calculate = function(radius, logic){
    let output = [];

    for (let index = 0; index < radius.length; index++) {
        output.push(logic(radius[index]))
    }

    return output;
}


// calcualte as .map()
Array.prototype.calculateAsMap = function(logic){
    let output = [];

    for (let index = 0; index < this.length; index++) {
        output.push(logic(this[index]))
    }

    return output;
}

console.log(calculate(radius, diameter));
console.log(radius.calculateAsMap(diameter));


let arr = [10,20,30,40,5];
function double(x){
    return 2*x;
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(binary);
console.log('output', output);


function isOdd(x){
    return x%2;
}

// oddOutput is a shallow copyt
const oddOutput = arr.filter(isOdd);

const sumOfArr = arr.reduce((sum, curr) => {
    return sum = sum + curr;
}, 0);

const productOfArr = arr.reduce((product, curr) => {
    return product = product * curr
})

const maxOfArr = arr.reduce((max, curr) => {
    return Math.max(max, curr);
    // return max > curr ? max : curr;
});

const users = [
    {
        firstName: 'Aditya',
        lastName: 'Tyagi',
        age:27
    },
    {
        firstName: 'Rohan',
        lastName: 'Gupta',
        age: 25
    },{
        firstName: 'Sanju',
        lastName: 'Mehta',
        age: 25
    },
    {
        firstName: 'Vibhu',
        lastName: 'Gulati',
        age: 30
    }
];

const listOfFullNames = users.reduce((allUsers, curr) => {
    allUsers.push(`${curr.firstName} ${curr.lastName}`);
    return allUsers;
}, []);
console.log("🚀 ~ listOfFullNames ~ listOfFullNames:", listOfFullNames)

const listOfFullNamesMap = users.map(name => name.firstName + " " 
+ name.lastName);
console.log("🚀 ~ listOfFullNamesMap:", listOfFullNamesMap)


const mapOfAge = users.reduce((output, curr) => {
    if(output[curr.age]){
        output[curr.age] += 1;
    } else {
        output[curr.age] = 1;
    }

    return output;
}, {})
console.log("🚀 ~ mapOfAge ~ mapOfAge:", mapOfAge)


const namesOfPeopleAgeLess30 = users.filter(user => {
    if(user.age < 30) return user;
}).map(item => {
    return item.firstName + ' ' + item.lastName; 
})
console.log("🚀 ~ namesOfPeopleAgeLess30 ~ namesOfPeopleAgeLess30:", namesOfPeopleAgeLess30);






