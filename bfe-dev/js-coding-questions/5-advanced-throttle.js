// 5. implement throttle() with leading & trailing option
function throttle(func, delay, option) {
    let timeout = null,
        lastContext = null,
        trailingArgs = null;

    const later = () => {
        if (option.trailing && trailingArgs) {
            func.apply(lastContext, trailingArgs);
            lastContext = null;
            trailingArgs = null;
            timeout = setTimeout(later, delay);
        } else {
            timeout = null;
        }
    };

    return function throttled(...args) {
        if (timeout) {
            lastContext = this;
            trailingArgs = args;
            return;
        }

        if (option.leading) {
            func.apply(this, args);
        } else {
            lastContext = this;
            trailingArgs = args;
        }

        timeout = setTimeout(later, delay);
    };
}

function fetchData() {
    // faking the api call delay
    // setTimeout(() => {

    // }, 1000);
    console.log('data returned from the API');
}

const throttledFetchData = throttle(fetchData, 5000, {
    leading: false,
    trailing: true,
});

// the function will be called at most once and the next will be called once 10s have been passed, and any scroll event invoked b/w 10s, it will not invoke anything.
window.addEventListener('click', throttledFetchData);
