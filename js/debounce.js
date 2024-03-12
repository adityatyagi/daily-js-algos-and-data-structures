// In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.
function initApp() {
    const searchInput = document.getElementById('debounce');
    console.log('🚀 ~ initApp ~ searchInput:', searchInput);

    const changeHandler = (e) => {
        console.log(e.target.value);
    };

    const debounce = (cb, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    };

    const debouncedChangeHandler = debounce(
        (e) => changeHandler(e),
        2000
    );

    searchInput.addEventListener('input', debouncedChangeHandler);
}

// run the js one the DOM is loaded completely
document.addEventListener('DOMContentLoaded', initApp);
