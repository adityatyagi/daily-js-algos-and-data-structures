// this - call, apply bind
/**
 * func.call(thisObj, arg1, arg2, arg3....);
 * func.apply(thisObj, argumentsArray);
 *  argumentsArray = [arg1, arg2, arg3, ...]
 *  argumentsArray = new Array(args1, args2, args3...)
 *  argumentsArray = arguments -> to take any number of arbituary args
 * 
 * The bind function creates a copy of a function with a new value to the this present inside the calling function.
 * func.bind(thisObj, arg1, arg2, ..., argN);
 */

// EXAMPLE OF CALL
function Car(type, fuelType){
    this.type = type;
    this.fuelType = fuelType;
}


function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
    Car.call(this, "convertable", "diesel");
    this.price = price;
    console.log('price', this)
}

setBrand('volvo');
definePrice(1000000);

// calling a function without "thisObj"
const newEntity = (obj) => console.log(obj);

function mountEntity(){
    this.entity = newEntity;
    console.log(`Entity ${this.entity} is mounted on this`, this)
}

mountEntity.call();



// EXAMPLE OF APPLY
function School(name, type){
    this.name = name;
    this.type = type;
}

function setStudentCount(count){
    School.apply(this, ['BIS', 'regular']);
    this.count = count;
    console.log('school', this);
}

function setSchoolLocation(schoolLocation){
    School.apply(this, new Array('BIS', 'regular'));
    this.schoolLocation = schoolLocation;
    console.log('school with schoolLocation', this);
}

setStudentCount(100);
setSchoolLocation('Vasant Kunj');


// using the argyuments keywords - to capture arbituary number of inputs
function addUp(){
    console.log("🚀 ~ addUp ~ arguments:", arguments); //  { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8 }
    const args = Array.from(arguments);
    console.log("🚀 ~ addUp ~ args:", args) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    // sum of all args
    const sum = args.reduce((sum, curr) => {
        return sum = sum + curr;
    }, 0);
    console.log("🚀 ~ sum ~ sum:", sum)
};
addUp(1,2,3,4,5,6,7,8);

// polyyfill for array.map
// func - is a function that needs to be called for each element
function newMap(func){
    let resultArr = [];
    for (let index = 0; index < this.length; index++) {
        resultArr.push(func.call(this, this[index]))
    }

    return resultArr;
}

Object.defineProperty(Array.prototype, 'newMap', {
    value: newMap
});

const arr = [10,20,30];
console.log(arr.newMap((item) => item * 100))
