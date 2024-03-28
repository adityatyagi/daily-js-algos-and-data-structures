// es6 - 2015 introduced classes

class Teacher {
    constructor(name, channel, likes = 0) {
        this.name = name;
        this.channel = channel;
        this.videoLikes = likes;
        this._author = 'NA';
    }

    // the methods on class can be written without "function" keyword and the methods will be on the object'(instances) prototype
    intro() {
        console.log(`${this.name} has the channel ${this.channel}`);
    }

    like() {
        console.log(
            `Liked the video!. Current like: ${++this.videoLikes}`
        );
    }
    get author() {
        return this._author;
    }
    set author(text) {
        console.log('🚀 ~ Teacher ~ setauthor ~ text:', text);
        if (text.trim() === '')
            throw new Error(
                'Author name must not be an empty string'
            );
        this._author = text;
    }
}

const aditya = new Teacher('aditya', 'random');
const ayush = new Teacher('ayush', 'test');
console.log(aditya);

// convert the class into a function constructor
function Teacher2(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
}
Teacher2.prototype.intro = function () {
    console.log(`${this.name} has the channel ${this.channel}`);
};
Teacher2.prototype.like = function () {
    console.log(
        `Liked the video!. Current like: ${++this.videoLikes}`
    );
};

const aditya2 = new Teacher2('aditya', 'random');
const ayush2 = new Teacher2('ayush', 'test');

// INHERTITANCE
class YoutubeTeacher extends Teacher {
    constructor(name, channel, subscriber) {
        super(name, channel);
        this.subscriber = subscriber;
    }
    static paidCourse() {
        // use to do the foundational work
        // cannnot access class properties and methods
        return new YoutubeTeacher('Rest', 'XAA', 78);
    }

    subscriberCount() {
        return `${this.name} on the ${this.channel} has the subscriber count of ${this.subscriber}`;
    }
}

const yt1 = new YoutubeTeacher('adi', 'test', 44);
console.log('🚀 ~ yt1:', yt1);
const yt2 = YoutubeTeacher.paidCourse(); // the new keyword will be only used for proper classes with constructors. static methods do not have any constructor
console.log('🚀 ~ yt2:', yt2);

// interview questions
// diff between class and object
// class - blueprint of the obj and the behaviour of the obj
// obj - instances of the class that has the properties and methods of the class

// Inheritance in JS classes - using extends keyword

// output?
class Employee {
    constructor() {
        this.name = 'John';
    }
    //  A class may only have one constructor
    // constructor(){
    //     this.age = 25;
    // }
}

const emp1 = new Employee();
console.log('🚀 ~ emp1:', emp1.name);

// which is better?
const jamesBond = {
    name: 'james',
    surname: 'bond',

    // this will maintain a CLOSURE for each copy of the object - hence bad for memory management. Its better to have class based approch here - memory efficient as the method on the class will be on prototype
    getFullName() {
        return `${this.name} ${this.surname}`;
    },
};

jamesBond.getFullName();

const calc = {
    total: 0,
    add: function (n) {
        this.total += n;
        return this; // returns the whole object
    },
    multiply(n) {
        this.total *= n;
        return this;
    },
    subtract(n) {
        this.total -= n;
        return this;
    },
    result() {
        return this.total;
    },
};
const result = calc.add(1).multiply(2).subtract(3).add(10).result();
console.log('result', result.total);

class Calculator {
    constructor() {
        this.result = 0;
    }
    add(n) {
        this.result += n;
        return this;
    }
    multiply(n) {
        this.result *= n;
        return this;
    }
    subtract(n) {
        this.result -= n;
        return this;
    }
    divide(n) {
        this.result /= n;
        return this;
    }
    total() {
        return this.result;
    }
}
const calc2 = new Calculator();
const result2 = calc2.add(1).multiply(2).subtract(3).add(10).total();
console.log('🚀 ~ result2:', result2);

// inheritance and polymorphism
// implement a shape class with area method
// create subclass circle/square that inherit from "shape" and override the area method

class Shape {
    constructor() {}
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
}

const c1 = new Circle(4);
console.log('🚀 ~ c1:', c1.area());
const s1 = new Square(4);
console.log('🚀 ~ s1:', s1.area());

// what are getters and setters - use for adding validations and checks before setting class properties values
aditya.author = '';
console.log(aditya.author);
