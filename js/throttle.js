// throttle: send immediately and then send after every x seconds. use for sending the most recent/updated thing to servers. It basically continually sends new request based on whatever the last input was. Used in resize window, scroll, mousemovement
// it does not wait for everything to be finished first, wait for x seconds and then send (debounce)
// there is NO CANCELLING of the current delay/wait period like it is in debouncing
function initApp() {
    const searchInput = document.getElementById('throttle');
    function handleInput(e) {
        console.log(e.target.value);
    }

    function throttle(cb, delay = 1000) {
        let shouldWait = false;
        let waitingArgs;
        const timeoutFunc = () => {
            if (waitingArgs === null) {
                shouldWait = false;
            } else {
                cb(...waitingArgs);
                waitingArgs = null;
                setTimeout(timeoutFunc, delay);
            }
        };
        return (...args) => {
            // if we are in the waiting period, then return
            if (shouldWait) {
                waitingArgs = args;
                return;
            }

            // call immediately
            cb(...args);
            shouldWait = true;
            // wait for the delay
            setTimeout(timeoutFunc, delay);
        };
    }

    const throttledInputHandler = throttle(
        (e) => handleInput(e),
        2000
    );
    searchInput.addEventListener('input', throttledInputHandler);

    // question
    // Ques 1 Create a button UI and add debounce as follows =>
    // --> Show "Button Pressed <X> Times" every time button is pressed
    // --> Increase "Triggered <Y> Times" count after 800ms of throttle
    let clickTimes = 0;
    let triggerTimes = 0;
    const throttleBtn = document.querySelector('#throttleBtn');
    const throttleTriggerText = document.querySelector(
        '#throttleBtnTrigger'
    );
    const start = new Date().getTime();
    const btnClickHandler = function (e) {
        console.log('clicked');
        const now = new Date().getTime();
        console.log(now - start);
        throttleTriggerText.textContent = ++triggerTimes;
    };
    function myThrottle(cb, delay) {
        let shouldWait = false;
        return function (...args) {
            if (shouldWait) {
                return;
            }
            cb(...args);
            shouldWait = true;
            setTimeout(() => {
                shouldWait = false;
            }, delay);
        };
    }
    const throttledHandler = myThrottle(
        (e) => btnClickHandler(e),
        800
    );
    throttleBtn.addEventListener('click', function (e) {
        throttleBtn.textContent = `Clicked ${++clickTimes} times`;
        throttledHandler(e);
    });
}
document.addEventListener('DOMContentLoaded', initApp);
