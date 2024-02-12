// callback hell - inversion of control (loosing control of the code)
/**
 * 
In the context of callback hell, "inversion of control" refers to the situation where your main program code essentially hands over control to the callback functions triggered by asynchronous operations. This can lead to several issues, making your code harder to read, maintain, and debug.
 * 
 */

/**
 * Promises vs Callbacks
 * Promise: an object representing eventual completion or failure of async operation
 * Promises are better than callbacks because it gives us back the control of the code, hence avoiding the inversion of control. With Promises, we are guranteed that the callback function will be called whenever the promsies resolves i.e. there is data in {data: <data_from_server>}. Also, it will only call it ONCE.
 *
 * States of Promises: pending, fullfilled, rejected
 * Promise objects are immutable - cannot be changed
 *
 * example of promise chaining
 * createOrder(cart)
 * .then(function(cartDetails){
 *      // return is important for promise chaining
 *      return proceedToPayment(cartDetails);
 * })
 * .then(function(paymentDetails){
 *      return showOrderSummary()
 * })
 *
 * With callbacks, we are not guranteed the calling of the callback function. we loose control of the code.
 */

const API = 'https://api.github.com/users/adityatyagi';
const response = fetch(API);
// the response object is immutable. we cannot edit data
console.log('🚀 ~ response:', response);
response.then((data) => {
    console.log(data);
});

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        function validateCart() {
            return true;
        }
        //validate card
        if (validateCart()) {
            const orderId = 11;
            resolve(orderId);
        } else {
            const err = new Error('Cart not valid');
            reject(err);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (orderId === 10) {
            setTimeout(function () {
                resolve({
                    paymentLink: 'https://paytm',
                });
            }, 3000);
        } else {
            const err = new Error('invalid orderId');
            reject(err);
        }
    });
}

createOrder()
    .then(function (orderId) {
        console.log('orderId from createOrder', orderId);
        return proceedToPayment(orderId);
    })
    .then(function (paymentLinkObj) {
        console.log(paymentLinkObj.paymentLink);
    })
    .catch(function (err) {
        console.error(err);
    });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1');
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2');
    }, 20000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3');
    }, 2500);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p4');
    }, 2000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p5');
    }, 3000);
});

async function checkPromiseAll() {
    try {
        // if any one fails, then .all() fails
        // const response = await Promise.all([p3, p4, p5]);

        // info about all with status and error/data
        // const responseAllSettled = await Promise.allSettled([
        //     p3,
        //     p4,
        //     p5,
        // ]);

        // returns the first success/fail
        // const responseAllRace = await Promise.race([p3, p4, p5]);

        // the first success, and if all fails - it will return an aggregated error
        const responseAllAny = await Promise.any([p3, p4, p5]);
        // console.log('all', response);
        // console.log('responseAllSettled', responseAllSettled);
        // console.log('responseAllRace', responseAllRace);
        console.log('responseAllAny', responseAllAny);
    } catch (error) {
        console.error(error);
    }
}
checkPromiseAll();
async function gitUser() {
    try {
        const response = await fetch(
            'https://api.github.com/user/adityatyag'
        );

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

    console.log('top of the stack');
    const p1Data = await p1;
    console.log(p1Data);

    const p2Data = await p2;
    console.log(p2Data);
}

// gitUser();
