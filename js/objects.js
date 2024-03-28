function init() {
    // dynamic properties
    const property = 'firstName';
    const firstName = 'Aditya';
    const person = {
        [property]: firstName,
    };
    console.log('🚀 ~ init ~ person:', person);

    const student = {
        name: 'Aditya',
        lastName: 'tyagi',
        name: 'Hero',
    };
    const nums = [55, 25, 35, 45];

    // iterates over the values and does not go into the prototype chain
    for (const iterator of nums) {
        console.log(
            '🚀 ~ init ~ iterator: - for...of array',
            iterator
        );
    }

    // for...in can work for arrays and iterates over the indexes of the values
    for (const key in nums) {
        console.log('🚀 ~ init ~ key:', key);
    }

    // iterates over the keys and goes into the prototype chain and hence it is better to check the key is object's own property or not
    for (const key in student) {
        if (Object.hasOwnProperty.call(student, key)) {
            const element = student[key];
            console.log('🚀 ~ init ~ element:', element);
        }
    }
    console.log('🚀 ~ init ~ student:', student);

    // multiplyBy2
    function multiplyBy2(obj) {
        //multiple all numeric property values by 2
        for (let key in obj) {
            // not going down the prototype chain
            if (obj.hasOwnProperty.call(obj, key)) {
                if (typeof obj[key] === 'number') {
                    obj[key] *= 2;
                }
            }
        }
        console.log(obj);
    }
    multiplyBy2({
        a: 2,
        b: 4,
        name: 'aditya',
        c: 5,
    });

    // what is the output
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };
    a[b] = 123; // the object {key: 'b'} cannot be a key as unless it is converted to a string. hence, the a["object Object"] is the key
    a[c] = 456; // here we are overwriting a["object Object"] = 456

    // all keys of an obejct are strings
    console.log(a);

    // what is JSON.stringify() and JSON.parse()
    // helps in - storing in localStorage
    let boy = {
        name: 'aditya',
        age: 24,
        address: {
            city: 'delhi',
        },
    };
    boyInString = JSON.stringify(boy);
    console.log('🚀 ~ init ~ boyInString:', boyInString);

    boyBackInObject = JSON.parse(boyInString);
    console.log('🚀 ~ init ~ boyBackInObject:', boyBackInObject);

    console.log([...'aditya']);

    // what is the output
    const settings = {
        username: 'Piyush',
        level: 19,
        health: 90,
    };
    console.log('🚀 ~ init ~ settings:', settings);
    console.log(JSON.stringify(settings, ['level']));

    // what is the output
    const shape = {
        radius: 10,
        diameter: function () {
            return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
    };
    console.log(shape.diameter());
    console.log(shape.perimeter());

    const { radius: myRadius } = shape;
    console.log('🚀 ~ init ~ radius:', myRadius);

    // Object Referencing
    let person2 = { name: 'shuchi' };
    const members = [person2]; // person2 here. setting members[0] value
    person2.name = null; // and person 2 here are pointing to the same object in memory
    person2 = null; // doesn't effect members[0]
    console.log(person2); // null
    console.log(members); // [{name: null}]

    // whats the output
    const value = { number: 10 };

    // { ...value }: cloning the object and not passing the reference to the original object
    function multiply(x = { ...value }) {
        console.log((x.number *= 2));
    }
    multiply();
    multiply();
    multiply(value); // passing reference to the original value obj - 20
    multiply(value); // the previous call updated the value object's number key to 20, hence 40

    // whats the output
    function changeAgeAndReference(person) {
        person.age = 25;

        // created a BRAND NEW object using {}
        person = {
            name: 'John',
            age: 50,
        };

        return person;
    }

    const person3 = {
        name: 'Alex',
        age: 30,
    };
    console.log(changeAgeAndReference(person3));
    console.log(person3);

    // deep copy vs shallow copy
    const deepCopyPerson3_A = Object.assign({}, person3);
    deepCopyPerson3_A.name = 'deepCopyPerson3_A';
    console.log('🚀 ~ init ~ deepCopyPerson3_A:', deepCopyPerson3_A);

    // WORKS FOR NESTED COPIES
    const deepCopyPerson3_B = JSON.parse(JSON.stringify(person3));
    deepCopyPerson3_B.name = 'deepCopyPerson3_B';
    console.log('🚀 ~ init ~ deepCopyPerson3_B:', deepCopyPerson3_B);

    // FAILS AT NESTED COPY
    // For nested copies: {...a, food: {...a.food}}
    const deepCopyPerson3_C = { ...person3 };
    deepCopyPerson3_C.name = 'deepCopyPerson3_C';
    console.log('🚀 ~ init ~ deepCopyPerson3_C:', deepCopyPerson3_C);
    console.log(person3);

    // copy a shallow nested object
    const mobile = {
        name: 'samsung',
        model: 213213,
    };
    const newObject = Object.assign(
        Object.create(Object.getPrototypeOf(mobile)), // copies the prototype chain as well
        mobile
    );
    console.log('🚀 ~ init ~ newObject:', newObject);
}
document.addEventListener('DOMContentLoaded', init);
