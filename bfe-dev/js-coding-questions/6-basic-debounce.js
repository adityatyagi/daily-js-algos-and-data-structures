// copy paste the code in sample.js and run index.html with Live Server
function initApp() {
    function debounce(fn, wait) {
        let timer;
        return function debounced(...args) {
            // if the fn is called when there is a timer running, clear the ongoing timer
            if (timer) {
                clearTimeout(timer);
            }

            // if the timer is not running or the user is coming for the first time, then start the timer and after the timer gets over with "wait", call the func
            timer = setTimeout(() => {
                fn.apply(null, args);
            }, wait);
        };
    }
    function fetchData(e) {
        console.log('fetchData');
    }

    const debouncedFetchData = debounce(fetchData, 3000);

    const nameField = document.getElementById('name');
    nameField.addEventListener('input', debouncedFetchData);
}
document.addEventListener('DOMContentLoaded', initApp);
