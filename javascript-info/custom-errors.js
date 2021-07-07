// Creating custom errors by extending the Error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError'; // because the parent constructor also sets name property, this is for overriding that
  }
}

function validate() {
  throw new ValidationError("Whoops!");
}

// try {
//   validate();
// } catch (error) {
//   if(error instanceof ValidationError) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
//   } else if (error instanceof SyntaxError) {
//     console.log('Syntax error');
//   } else {
//     throw error; // re-throw the unknown error
//   }
// }

// further extending Validation error
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('Property ' + property); // this will be printed as the message in the top most parent class Error
    this.name = 'PropertyRequiredError'; // <-- manually updating the this.name for every extended Error class can be difficult, therefore we need to automate that
    this.property = property;
  }
}
try {
  let a = {'b': 4};
  if(!a.c) {
    throw new PropertyRequiredError('c');
  }
} catch (error) {
  if(error instanceof PropertyRequiredError) {
    console.log('Property is required', error.message);
  } else {
    throw error;
  }
}

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError2 extends MyError {};

class PropertyRequiredError2 extends ValidationError2 {
  constructor(property) {
    super('Missing property ' + property);
    this.property = property;
  }
}
try {
  let a = {'b': 4};
  if(!a.c) {
    throw new PropertyRequiredError2('c');
  }
} catch (error) {
  if(error instanceof PropertyRequiredError2) {
    console.log(error.message);
  }
}