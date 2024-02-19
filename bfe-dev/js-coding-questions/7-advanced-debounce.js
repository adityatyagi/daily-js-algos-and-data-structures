function initApp() {
    function debounce(fn, wait, options) {
        let timer;

        // if the function call was made for leading or for trailing
        let isLeadingInvoked = false;

        return function debounced(...args) {
            let context = this;
            // trailing
            if (timer) {
                console.log('timer not over, hence clear timer');
                clearTimeout(timer);
            }

            // if the leading flag is true and the timer has not started, invoke the func immediately
            if (options.leading && !timer) {
                console.log('call leading');
                fn.apply(context, args);
                isLeadingInvoked = true;
            } else {
                isLeadingInvoked = false;
            }

            // if the timer is not running or the user is coming for the first time, then start the timer and after the timer gets over with "wait", call the func - TRAILING PART
            console.log('start timer');
            timer = setTimeout(() => {
                console.log('timeout reg. will run after 3s');
                console.log(
                    '🚀 ~ timer=setTimeout ~ isLeadingInvoked:',
                    isLeadingInvoked
                );
                if (options.trailing && !isLeadingInvoked) {
                    console.log('called trailing');
                    fn.apply(context, args);
                }
                timer = null;
            }, wait);
        };
    }
    function fetchData(e) {
        console.log('fetchData');
    }

    const debouncedFetchData = debounce(fetchData, 3000, {
        leading: true,
        trailing: true,
    });

    const nameField = document.getElementById('name');
    nameField.addEventListener('input', debouncedFetchData);
}
document.addEventListener('DOMContentLoaded', initApp);
