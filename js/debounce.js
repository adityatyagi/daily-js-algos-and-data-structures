// In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce.
function initApp() {
    const searchInput = document.getElementById('debounce');
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

    // question
    // Ques 1 Create a button UI and add debounce as follows =>
    // --> Show "Button Pressed <X> Times" every time button is pressed
    // --> Increase "Triggered <Y> Times" count after 800ms of debounce
    const debounceButton = document.querySelector('#debounceBtn');
    const debounceBtnTrigger = document.querySelector(
        '#debounceBtnTrigger'
    );
    let x = 0;
    let y = 0;
    function updateBtnText() {
        debounceButton.textContent = `Clicked ${++x} time`;
    }
    function updateTriggerText() {
        debounceBtnTrigger.textContent = ++y;
    }
    function buttonClickHandler(e) {
        console.log(e);
    }
    function myDebounce(cb, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args);
                updateTriggerText();
            }, delay);
        };
    }
    const debouncedHadler = myDebounce(
        (e) => buttonClickHandler(e),
        800
    );
    debounceButton.addEventListener('click', function (e) {
        updateBtnText();
        debouncedHadler(e);
    });
}

// run the js one the DOM is loaded completely
document.addEventListener('DOMContentLoaded', initApp);
