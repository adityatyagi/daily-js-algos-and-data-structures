console.log('start');
function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Hello ` + username);
    }, 1000);
}
function like(id, cb) {
    setTimeout(() => {
        cb(`Like the video with id ` + id);
    }, 1000);
}

// pyramid of doom - callback hell
// const message = importantAction('Aditya', function (message) {
//     console.log(message);
//     like(1, function (action) {
//         console.log(action);
//         like(1, function (action) {
//             console.log(action);
//             like(1, function (action) {
//                 console.log(action);
//                 like(1, function (action) {
//                     console.log(action);
//                     like(1, function (action) {
//                         console.log(action);
//                         like(1, function (action) {
//                             console.log(action);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// const sub = new Promise((resolve, reject) => {
//     let result = true;
//     if (result) resolve('The result is ' + result);
//     else reject(new Error('Something went wrong'));
// });
// sub.then((data) => {
//     console.log(data);
// }).catch((err) => console.error(err));

const subResolved = Promise.resolve('Success');
const subRejected = Promise.reject(new Error('Something went wrong'));
function importantActionPromise(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello ' + username);
        }, 1000);
    });
}
function likePromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the video with id ` + id);
        }, 1000);
    });
}
function sharePromise(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the video with username ` + username);
        }, 500);
    });
}
function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Rejected`);
        }, 100);
    });
}

// importantActionPromise('Pink')
//     .then((data) => {
//         console.log(data);
//         return likePromise(10);
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.error(err));

// Promise Combinators - .all, .allSettled, .any, .race
/**
 * - takes array of promises
 * .all - all or nothing. returns a single promise. Gives array of all fullfilled promises as result when ALL promises fullfill
 * .allSettled - returns a single promise., gives all as an array - irrespective of fullfilled or rejected
 * .any -any one FULLFILLS gives back the 1st FULLFILLED + quickest
 * .race - returns result of fastest promise - success or failure - the single returned promise settles with the fastest promise that settles - fail or success
 */
let allPromises = [
    importantActionPromise('Hero'),
    likePromise(2),
    sharePromise('nitin'),
];

// all or nothing. result = [] of all promises in order
Promise.all(allPromises)
    .then((values) => {
        console.log(values);
    })
    .catch((err) => console.error(err));

// all - [] of all settled promises - fail or success
allPromises = [
    importantActionPromise('Hero'),
    likePromise(2),
    sharePromise('nitin'),
    rejectPromise(),
];
Promise.allSettled(allPromises)
    .then((values) => {
        console.log(values);
    })
    .catch((err) => console.error(err));

// any one success / fullfilled
Promise.any(allPromises)
    .then((values) => {
        console.log('any', values);
    })
    .catch((err) => console.error(err));

// fastest settled
Promise.race(allPromises)
    .then((values) => {
        console.log('any', values);
    })
    .catch((err) => console.error('race', err));

console.log('end');

// -----------------------
console.log('***************************');
// -----------------------

// ASYNC/AWAIT - when we want promises to be haneled one after the other
async function testAsyncAwait() {
    try {
        const result1 = await importantActionPromise('Hero');
        const result2 = await likePromise(2);
        const result4 = await rejectPromise(); // JUMPS OUT TO CATCH BLOCK
        const result3 = await sharePromise('nitin');
    } catch (error) {}
}
testAsyncAwait();

// -----------------------
console.log('********QUESTIONS*******************');
// -----------------------
// Promises in Javascript
// Ques 1 - What's the output? | I
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    // when the promise1 is initialized, the JS engine will find al the sync code in it and run that first and keep the async code to run at last
    console.log(1);
    resolve(2); // if there is no resolve, the execution will not go inside the .then block
});
promise1.then((res) => {
    console.log(res);
});
console.log('end');

// result
// start
// 1
// end
// 2

// -----------------------
console.log('***************************');
// -----------------------
console.log('2. start');

// this will run only when the fn().then is encountered
const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    });

console.log('middle');

fn().then((res) => {
    console.log(res);
});

console.log('end');

/**
 * result:
 * 2. start
 * middle
 * 1
 * end
 * success
 */

// -----------------------
console.log('***************************');
// -----------------------
console.log('3. start');
function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}
let promise = job();
promise
    .then(function () {
        console.log('Success 1');
    })
    .then(function () {
        console.log('Success 2');
    })
    .then(function () {
        console.log('Success 3');
    })
    .catch(function () {
        console.log('Error 1');
    })
    .then(function () {
        console.log('success 4');
    });

// advanced version
function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise2 = job(true);

promise2
    .then(function (data) {
        console.log(data);
        return job(false);
    })
    .catch(function (error) {
        console.log(error);
        return 'Error caught'; // returning a "string" and not a FAILED promise, hence the chained .then will execute
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (err) {
        console.log(err);
    });

// more advanced version

let promise3 = job(true);

promise3
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .then(function (data) {
        if (data !== 'victory') throw 'Defeat'; // throwing error/exception
        return job(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job(false); // rejected promise
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
        return 'Error caught'; // returning a string
    })
    .then(function (data) {
        console.log(data);
        return new Error('test'); // not returning a promise
    })
    .then(function (data) {
        console.log('Success: ', data.message);
    })
    .catch(function (data) {
        console.log('error', data.message);
    });

/**
 * success
 * defeat
 * error
 * error caught
 * Success Test
 */

// -----------------------
console.log('***************************');
// -----------------------

// promise chaining
const firstPromise = new Promise((resolve, reject) => {
    resolve('first!');
});
const secondPromise = new Promise((resolve, reject) => {
    // the second promise resolves the first promise
    resolve(firstPromise);
});

const thirdPromise = () => {
    return new Promise((resolve, reject) => resolve('third'));
};
const forthPromise = () => {
    return new Promise((resolve, reject) => resolve(thirdPromise));
};
forthPromise()
    .then((d) => d()) // the forthPromise resolves not a PROMISE but a function that returns a PROMISE
    .then((l) => console.log('****', l));

// thirdPromise().then((d) => console.log('third promise', d));
secondPromise
    .then((d) => {
        return d;
    })
    .then((dataFromFristPromise) => {
        console.log('dataFromFristPromise', dataFromFristPromise);
    });

// -----------------------
console.log('***************************');
// -----------------------
// Ques 8 - Rewrite this example code using `async/await
// instead of .then/catch
function loadJson(url) {
    return fetch(url).then((response) => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
}
loadJson('https://jsonplaceholder.typicode.com/posts').catch((err) =>
    console.log(err)
);

// ans
async function loadJSONAsync(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

// Ques 9 - Solve Promise Recursively - takes an array of promises and resolves them recursivly
const allPromisesToTest = [
    importantActionPromise('Hero'),
    likePromise(2),
    sharePromise('nitin'),
    rejectPromise(),
];
function promRecurse(funcPromises) {
    // Write Implementation Here
    // base case
    if (funcPromises.length === 0) return;

    // get the first promise from the array from the start: L -> R
    const promise = funcPromises.shift();

    // resolve the promise
    promise
        .then((d) => console.log('inside promRecursive', d))
        .catch((e) => console.error('inside promRecursive', e));

    promRecurse(funcPromises);
}
promRecurse(allPromisesToTest);

// --------------POLLYFILLS******************');
function MyPromise(executor) {
    let resolveFunc,
        rejectFunc,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;
    function resolve(val) {
        isFulfilled = true;
        value = val;

        // if the resolve is called async mode
        if (typeof resolveFunc === 'function') {
            resolveFunc(value);
            isCalled = true; // the resolveFunc is called i.e. the .then callback
        }
    }
    function reject(errValue) {
        isRejected = true;
        value = errValue;

        // if the reject is called in async mode
        if (typeof rejectFunc === 'function') {
            rejectFunc(errValue);
            isCalled = true; // the rejectFunc is called i.e the .catch callback
        }
    }
    this.then = function (callback) {
        resolveFunc = callback;
        if (isFulfilled && !isCalled) {
            // its an sync operation - first resolve and then .then
            isCalled = true;
            resolveFunc(value);
        }
        return this;
    };
    this.catch = function (callback) {
        rejectFunc = callback;

        // if reject() is called in sync mode
        if (isRejected && !isCalled) {
            rejectFunc(value);
            isCalled = true;
        }
        return this;
    };

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

const samplePromise = new MyPromise((resolve, reject) => {
    // in async mode - first the .then will be called and then the resolve
    // setTimeout(() => {
    //     reject(2);
    // }, 1000);

    // in sync mode - first the resolve will be called and then the .then, hence the resolveFunc will not be assigned a callback
    reject(2);
});

samplePromise
    .then(function (data) {
        console.log('🚀 ~ data: in .then samplePromise', data);
    })
    .catch(function (error) {
        console.log('🚀 ~ error: in .then samplePromise', error);
    });

// pollyfill for promise.all - all or nothing
// input - takes an array of promises
// output - array of promise results if all promises fulfilled, if any one rejected, throw error
const allPromisesToTestAllPollyfill = [
    importantActionPromise('Hero'),
    likePromise(2),
    sharePromise('nitin'),
    rejectPromise(),
];
Promise.myAll = function (promArr) {
    return new Promise((resolve, reject) => {
        let results = [];
        if (promArr.length === 0) {
            resolve(results);
            return;
        }

        // get the first promise
        let pending = promArr.length;

        promArr.forEach((promise, idx) => {
            Promise.resolve(promise).then(function (res) {
                results[idx] = res;
                pending--;
                if (pending === 0) {
                    resolve(results);
                }
            }, reject);
        });
    });
};

Promise.myAll2 = function (promArr) {
    return new Promise((resolve, reject) => {
        let results = [];
        if (!promArr.length) {
            resolve(results);
            return;
        }

        let promisesPendingToBeResolved = promArr.length;

        promArr.forEach((promise, idx) => {
            Promise.resolve(promise).then(function (data) {
                results[idx] = data;
                promisesPendingToBeResolved--;

                if (promisesPendingToBeResolved === 0) {
                    resolve(results);
                }
            }, reject);
        });
    });
};

Promise.myAll2(allPromisesToTestAllPollyfill)
    .then((data) => {
        console.log('allPromisesToTestAllPollyfill: data', data);
    })
    .catch((error) => {
        console.log(
            '🚀 ~ error:allPromisesToTestAllPollyfill',
            error
        );
    });
