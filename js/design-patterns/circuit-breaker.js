// circuit breaker prevents cascading failures
// open/close the circuit based on the failure count and the time threshold
// using closure to keep a track of failureCount and time threshold

/**
 * Implements a circuit breaker design pattern to prevent cascading failures.
 *
 * @param {function} callback - The function to be executed.
 * @param {number} failureCount - The maximum number of consecutive failures allowed.
 * @param {number} timeThreshold - The time threshold in milliseconds.
 * @return {function} returns a function that wraps the callback and enables the circuit breaker.
 */
function circuitBreaker(
    callback,
    failureCountThreshold,
    timeThreshold
) {
    let failCount = 0;
    let timeOfLastFailure = 0;
    let isClosed = false; // initially the circuit is open
    return function (...args) {
        // if the circuit is halted
        if (isClosed) {
            const timeSinceLastFailure =
                Date.now() - timeOfLastFailure;
            if (timeSinceLastFailure > timeThreshold) {
                failCount = 0; // reset failCount
                isClosed = false; // open the circuit
            } else {
                return new Error('Service Unavilable');
            }
        }

        try {
            const result = callback(...args);
            failCount = 0; // reset failCount
            return result; // return the API result
        } catch (error) {
            console.log('🚀 ~ error:', error);
            failCount++; // increment failCount
            timeOfLastFailure = Date.now(); // store the time of the last failure
            // if the API fails more than the expected number of times, close/halt the circuit
            if (failCount > failureCountThreshold) {
                isClosed = true;
            }
        }
    };
}

// test function
function testFunction() {
    // using closure to keep a track of how many times the function is being called to simulate 3 failures
    let count = 1;

    return function (...args) {
        console.log('🚀 ~ count:', count);
        if (count > 3) {
            return 'Success';
        } else {
            count++;
            throw new Error('API Failed!');
        }
    };
}
const test = testFunction();
const cb = circuitBreaker(test, 3, 300);

cb(); // API Failed!
cb(); // API Failed!
cb(); // API Failed!

setTimeout(() => {
    console.log(cb());
}, 5000);
