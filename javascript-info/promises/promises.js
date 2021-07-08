// callbacks
function loadScript(scriptToLoad) {
  let script = document.createElement('script');
  script.src = scriptToLoad;
  // append the script in head part of the html
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js');
// console.log(moment()); // this will give error because it takes some time to load the moment script

// give the moment() function as the callback to the function loading the script

/**
 * To load the script asynchronously and then invoke the callback
 * @param {string} script The script to load
 * @param {Function} callback The callback function to load
 */
function loadScriptAsync(scriptToLoad, callback) {
  let script = document.createElement('script');
  script.src = scriptToLoad;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScriptAsync('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', function(script) {
  console.log(`Cool, the script ${script.src} is loaded`);
  console.log(moment());

  loadScriptAsync('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', function(script) {
    console.log(`Cool, the script ${script.src} is loaded`);

    loadScriptAsync ('https://code.jquery.com/jquery-3.6.0.js', function(script) {
      console.log(`Cool, the script ${script.src} is loaded`);
    });
  });
});

// handling errors in callbacks
// creating error-first callbacks
function loadScriptAsyncWithErrors(scriptToLoad, callback) {
  let script = document.createElement('script');
  script.src = scriptToLoad;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('The function broke!'));
  document.head.append(script);
};
loadScriptAsyncWithErrors('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', function(error, script) {
  if(error) {
    console.log(error);
  } else {
    console.log('The script '+script+' is loaded!');
    loadScriptAsyncWithErrors('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', function(errors, script) {
      if(errors) {
        console.error(errors);
      } else {
        loadScriptAsyncWithErrors('https://code.jquery.com/jquery-3.6.0.js', function(error, script) {
          if(error) {
            console.error(error);
          } else {
            console.log('Loaded the script');
          }
        })
      }
    })
  }
})
// seeing the above code, the code starts moving to right with every new callback introduction and hence this is called
// pyramid of doom or the callback hell

// 1 solution is to flatten the callback hell, but that makes every function in the chain useable only once
loadScriptAsyncWithErrors('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', step1);
function step1(error, script1) {
  if(error) {
    console.error(error);
  } else {
    loadScriptAsyncWithErrors('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', step2);
  }
}

function step2(error, script) {
  if(error) {
    console.error(error);
  } else {
    loadScriptAsyncWithErrors('https://code.jquery.com/jquery-3.6.0.js', step3);
  }
}

function step3(error, script) {
  if(error) {
    console.error(error);
  } else {
    console.log('final one!!!!!!')
  }
}
// we have flattend the entire thing but the functions are not re-usablem thus causing the namespace issue
// to resolve the callback hell / pyramid of doom - we have Promises.