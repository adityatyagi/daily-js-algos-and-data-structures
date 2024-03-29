// what is event loop?
// js is a single threaded language and event loop is responsible for its async behaviour
// the event loop is like a traffic controller in JS that manages the execution of the code
// it ensures that the tasks are processesd in an orderly manner, handling async operations by continuously checking if there are pending tasks in queue (task-callback/microtask); It helps so that our main thread does not block

// why do we need event loop to manage these tasks?
// explain with example - setTimeout v/s Promise.resolve().then

// output?
blockMainThread();

console.log('start');

// we should avoid such code as it is sync code and blocks the main thread (JS is a single threaded lang)
function blockMainThread() {
    const start = Date.now();
    while (Date.now() - start < 1000) {}
    console.log('running');
}
console.log('end');

for (var index = 0; index < 3; index++) {
    setTimeout(() => {
        console.log(index); // stores "reference to index" and not "value" of index during that loop - var
    }, index * 1000);
}
// 3, 3, 3

// output
function pause(millisec) {
    return new Promise(function p(resolve) {
        setTimeout(function s() {
            resolve('resolved');
        }, millisec);
    });
}

var startTimer = Date.now();
console.log('start');

pause(1000).then(function d(data) {
    const end = Date.now();
    console.log(data, ':', end - startTimer / 1000);
});

// call stack -
// task queue / callstack queue -
// microtask queue -

// output
// start
//
