// promises
// the Promise object has 2 states: pending and settled
// When state: pending, and result = undefined
// When state: resolved, and result = value
// when state: rejected, and result = error

let promise = new Promise((resolve, reject) => {
  // resolve and reject are callbacks that need to be invoked with result data and error respec.
  setTimeout(() => {
      resolve('This is the value');
  }, 1000);
});

promise
  .then(
    result => {
      console.log(result);
    },
    error => {
      console.error(error);
    }
  );

let promiseWithReject = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject(new Error('Promise rejected'));
  }, 1500);
})

// method 1
// promiseWithReject.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.error(error);
//   }
// )

// method 2
// promiseWithReject.catch(error => {
//   console.error(error);
// })

// method 3
// promiseWithReject.then(null, error => {
//   console.error(error);
// })

// method 4
// promiseWithReject.then(
//   result => {console.log(result)},
//   error => {console.error('Inside error', error)}
// ).catch(err => {
//   // here catch will not work as the error is being handled by then only
//   console.error('Printing error in catch');
// })

promiseWithReject
.finally(() => {
  // finally passes on the error and result
  console.log('In finally');
})
.catch(error => console.error(error));

promise
.finally(() => {
  console.log('Finally do not have any arguments!')
})
.then(
  result => console.log(result)
)