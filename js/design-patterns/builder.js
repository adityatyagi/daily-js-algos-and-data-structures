// builder design pattern - method chaining
// we return the reference of the same object from the methods so that the methods of the same object can be used
// there should be a methods that terminates the chain as well
// we "share the object instance"
// USES - create complex objects at runtime, or composite tree like DOM

class Payment {
    constructor(currency = 'Rs', amount = 0) {
        this.currency = currency;
        this.amount = amount;
    }

    setCurrency(currency) {
        this.currency = currency;
        return this; // return the reference to the same object
    }

    add(addAmt) {
        this.amount += addAmt;
        return this; // return the reference to the same object
    }

    // terminates the chain
    pay() {
        console.log(`paying ${this.currency} ${this.amount}`);
    }
}

const p1 = new Payment(); // this object will be shared across all methods

p1.add(100).add(200).setCurrency('USD').pay();
p1.setCurrency('Rs').pay();

// in js we can use the builder design pattern without classes and with simple objects
const paymentObj = {
    amount: 0,
    currency: 'Rs',
    setCurrency: function (curr) {
        this.currency = curr;
        return this;
    },
    add: function (amt) {
        this.amount += amt;
        return this;
    },
    pay: function () {
        console.log(`paying ${this.currency} ${this.amount}`);
    },
};

paymentObj.add(100).add(900).setCurrency('USD').pay();
