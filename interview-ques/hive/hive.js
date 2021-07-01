window.MaxRetries = 4;
var n = 0; // no. of retrys
window.initialTimer = (n)^1/n;
var numberOfRetry = document.getElementById('no-of-retry');
var button = document.getElementById('btn');
var helpText= document.getElementById('help-text');
document.getElementById('help-text').style.display = 'none';

function pseudoApiStub() {
	// return Math.random() < 0.5;
	return false;
}

function setRetrys(n) {
	n = window.initialTimer^n;
}

function countdown(n) {
  let seconds = n;
  var countdown = setInterval(function() {
    helpText.style.display = 'block';
    seconds--;
    numberOfRetry.innerText = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}

function startTry() {
  console.count()
	let shouldFinish = pseudoApiStub();
  let timer;

  // base case
  if(n > window.MaxRetries && !shouldFinish) {
    n = 0;
  	button.innerText = 'Restart';
    button.disabled = false;
    helpText.style.display = 'none';
    clearTimeout(timer);
  } else {
  		if(shouldFinish) {
        n = 0;
        button.innerText = 'Finish';
        button.disabled = true;
        helpText.style.display = 'none';
        clearTimeout(timer);
    	} else {
        button.innerText = 'Loading';
        button.disabled = true;

        // use setTimeout with incrementing numberOfRetry
        countdown(n);
        timer = setTimeout(() => {
          console.log('n in timer', n)
          n++;
          startTry();
        }, n*1000);
    	}
  }
}