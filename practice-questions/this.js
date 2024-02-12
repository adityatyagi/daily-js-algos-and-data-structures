'use strict';
console.log(this);

// this in function scope
function getname() {
    // different from the global this
    console.log(this);
}
getname();

const student = {
    firstName: 'Aditya',
    getFirstName: function () {
        console.log(this.firstName);
    },
};

const student2 = {
    firstName: 'Rohan',
};

// change the reference to "this" keyword for the getFirstName method
student.getFirstName.call(student2);

function getAddress() {
    const address = {
        line1: 'asdsad',
        getLine1: () => {
            console.log(this);
        },
    };

    address.getLine1();
}

getAddress();
