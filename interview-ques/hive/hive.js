window.MaxRetries = 4; // max no. of retrys
let n = 0; // no. of retrys
window.initialTimer = (n)^1/n;
let numberOfRetry = document.getElementById('no-of-retry');
let button = document.getElementById('btn');
let helpText= document.getElementById('help-text');

// hide the countdown help text message initially
helpText.style.display = 'none';

/**
 * @description Returns a boolean value randomly
 * @returns {boolean} true/false randomly
 */
function pseudoApiStub() {
	return Math.random() < 0.5;
}

/**
 * @description Set retry count
 * @param {number} retryCount Most latest retry number
 */
function setRetrys(retryCount) {
	n = window.initialTimer^retryCount;
}

/**
 * @description Retry countdown
 * @param {number} countdownFrom Seconds from where we need to start the countdown
 */
function countdown(countdownFrom) {
  let seconds = countdownFrom;

  let countdown = setInterval(function() {
    helpText.style.display = 'block';
    seconds--;

    // to not print -1 in the countdown
    if(seconds >= 0) {
      numberOfRetry.innerText = seconds;
    }
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}

/**
 * @description Resets the button's state depending on the flags
 * @param {boolean} disabled Flag to toggle between enable/disable button
 * @param {*} timer The timer to clear post finishing or hitting max retrys
 * @param {string} buttonText Text for the button present
 */
function resetButton(disabled, timer, buttonText) {
  n = 0;
  button.innerText = buttonText;
  button.disabled = disabled;
  helpText.style.display = 'none';
  clearTimeout(timer);
}

/**
 * @description Starts with the first try and eventually runs atmost maximum number of retrys
 */
function startTry() {
	let shouldFinish = pseudoApiStub();
  let timer;

  // base case
  if(n > window.MaxRetries && !shouldFinish) {
    resetButton(false, timer, 'Restart');
  } else {
  		if (shouldFinish) {
        resetButton(true, timer, 'Finish');
    	} else {
        button.innerText = 'Loading';
        button.disabled = true;

        // use setTimeout with incrementing numberOfRetry
        countdown(n);
        timer = setTimeout(() => {
          n++;
          startTry();
        }, n * 1000);
    	}
  }
}