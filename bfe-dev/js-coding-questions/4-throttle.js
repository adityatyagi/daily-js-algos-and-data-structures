// create a function throttle that takes in a function and returns the throttled version
function throttle(cb, delay) {
    // tracking timer
    let isWaiting = false;
    let lastArgs = null;

    return function throttled(...args) {
        if (isWaiting) {
            lastArgs = args;
            return;
        }
        // if there is no running timer, then invoke the cb and start the timer with the delay
        cb.apply(this, args);
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;

            // calling 1 additional callback from the stack
            if (lastArgs) {
                throttled.apply(this, lastArgs);
                lastArgs = null;
            }
        }, delay);
    };
}

function fetchData() {
    // faking the api call delay
    // setTimeout(() => {

    // }, 1000);
    console.log('data returned from the API');
}

const throttledFetchData = throttle(fetchData, 5000);

// the function will be called at most once and the next will be called once 10s have been passed, and any scroll event invoked b/w 10s, it will not invoke anything.
window.addEventListener('click', throttledFetchData);
