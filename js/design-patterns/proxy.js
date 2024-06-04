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
