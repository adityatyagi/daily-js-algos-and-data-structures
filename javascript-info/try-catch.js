// try catch only works with runtime errors.
// runtime errors are also called exceptions
// try catch do not work for parse-time errors like syntax errors

try {
  // code
  console.log('perfect 1');
  console.log('perfect 2');
} catch (error) {
  console.error(error);
}

// errors
// try {
//   console.log(a);
// } catch (error) {
//   console.log('-------------------in error----------')
//   console.error(error);
// }

// try catch works synchronously
// setTimeout within try block if gives error, the catch block will not catch it
// try {
//   setTimeout(() => {
//       console.log(a);
//   }, 1000);
// } catch (error) {
//     console.log('in sync error', error);
// }

// the try-catch block should therefore be in the setTimeout block
// setTimeout(() => {
//   try {
//     console.log(b);
//   } catch (error) {
//     console.log('error in settimeout', error);
//   }
// });

// error object - name, message and stack
// try {
//   console.log(h);
// } catch (error) {
//   console.log('name', error.name);
//   console.log('message', error.message);
//   console.log('stack', error.stack);
// }

// using only catch without the error - this is new and the old might need polyfills
// try {
//   console.log(o);
// } catch {
//   console.log('in empty catch');
// }

// example
// try {
//   let badJson = '{bad: json}';
//   let pureJson = JSON.parse(badJson);
// } catch (error) {
//   console.log('Oops! Something went wrong!');
//   console.error(error);
// }

// throwing our own errors
// throw new Error(errorMessage)
// for built in errors like Error, SyntaxError, ReferenceError, TypeError
// try {
//   let a = {
//     name: 'Aditya'
//   };
//   if(a.name !== 'Ayush') {
//     throw new SyntaxError("The name has to be Ayush");
//   }
// } catch (error) {
//   console.log(error);
// }

// rethrowing an error
// function testError() {
//   try {
//     blabla();
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(error.name);
//     } else if (error instanceof TypeError) {
//       console.log(error.name);
//     }
//     throw error;
//   }
// }

// try {
//   testError();
// } catch (error) {
//   console.log('Catching error in outer try-catch', error);
// }

// try-catch-finally
// try {
//   bla();
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log('and finally this runs');
// }

// only try-finally also works

// the variables defined within try-catch are block scoped to the try-catch block.
// hence define the variables outside try-catch

// global catch
// process.on("uncaughtException", () => {
//   console.log('here');
// })

