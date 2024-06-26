// Proxy design pattern - where you make the changes to the target source via an intermediary
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// can be used for intercepting (validations), monitoring, alerting or logging

// target object
const person = {
    name: 'aditya',
    age: 18,
    isAdult: true,
    gender: 'male',
};

const proxiedPerson = new Proxy(person, {
    get: (object, prop) => {
        // return object[prop];
        return Reflect.get(object, prop);
    },
    set: (object, prop, value) => {
        // object[prop] = value;

        if (prop === 'age' && value < 18) {
            console.log('Age should be more than 18');
        } else {
            Reflect.set(object, prop, value);
        }
    },
});
console.log(proxiedPerson.name);
proxiedPerson.age = 17; // will not change
console.log(proxiedPerson.age);

const car = {
    name: 'bmw',
};

Object.defineProperty(car, 'getName', {
    get: function () {
        return this.name;
    },
});

Object.defineProperty(car, 'setName', {
    set: function (value) {
        this.name = value;
    },
});

console.log(car.name);
console.log(car.getName);
car.setName = 'audi';
console.log(car.name);
console.log(car.getName);
car.range = 9000; // we were not able to track the range
console.log(car.range);

// using proxies, we can track the basic activites. proxy will act as an interceptor
const car2 = {
    name: 'maruti',
};

const handler = {
    // target: target object for which we need to create a proxy off and monitor
    // prop: the property of the object in consideration
    // value: value of the property
    set(target, prop, value) {
        console.log(
            `${prop} is changed from ${target[prop]} to ${value}`
        );
        target[prop] = value;
    },
};

const monitorCarObj = new Proxy(car2, handler);
monitorCarObj.name = 'hundai'; // can track the changes
monitorCarObj.blog = 'team-bhp'; // can track the addition of new property
