function debounceAndThrottle(func, delay, throttleInterval) {
    let timeout;
    let lastCalledTime = 0;

    const throttledFunc = function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCalledTime >= throttleInterval) {
            lastCalledTime = currentTime;
            func.apply(this, args);
        }
    };

    const debouncedFunc = function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };

    return function (...args) {
        throttledFunc.apply(this, args);
        debouncedFunc.apply(this, args);
    };
}

const handler = () => {
    console.log('hello');
};

// Example usage:
const combinedFunc = debounceAndThrottle(
    handler,
    5000, // debounce delay in milliseconds
    1000 // throttle delay
);
const input = document.getElementById('debounceAndThrottle');
input.addEventListener('input', combinedFunc);

// Call the combined function
// setInterval(combinedFunc, 100); // Will log "Function called" every second, but debounced after 200 milliseconds of inactivity
