const a = {};
console.log(a);

class Robot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class Transform extends Robot {
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree;
    }
}
console.log(Robot);
const t1 = new Transform('r2', 23, 90);
console.log('t1', t1);
const r1 = new Robot();
console.log('r1', r1);
