function fullname() {
    const firstName = 'Aditya';
    function printFirstName() {
        console.log(firstName);
    }
    return printFirstName; // pass the reference to it
}

const printFirstName = fullname();
printFirstName();
