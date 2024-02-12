// closure
function printNumbers(){
    for(var i=1; i<=5; i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
}

function printNumbersAfterEverySec(){
    for (let index = 1; index <= 5; index++) {
        setTimeout(() => {
                console.log(index);
        }, index*1000);
        
    }
}

// print numbers after every second
// printNumbersAfterEverySec();
// printNumbers();


// data hiding and encapsulation by closuers
function counter(){
    let count = 0;
    function incrementCounter(){
        count++;
        console.log(count);
    }
    return incrementCounter;
}

let ic = counter();
ic();
ic();

let ic2 = counter();
ic2();
ic2();
ic2();


// constructor function
function CounterNew(){
    let count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

let counter2 = new CounterNew();
counter2.incrementCounter();
counter2.incrementCounter();
counter2.incrementCounter();
counter2.decrementCounter();


// function statement = function declaration
function statementAndDeclaration(){
    console.log('statementAndDeclaration');
}

// expression
var expressionExample = function (){
    console.log('expressionExample');
}

// named function expression
var namedFuncExpressions = function xyz(){
    console.log('namedFuncExpressions');
    console.log(xyz);
}

statementAndDeclaration();
expressionExample();
namedFuncExpressions();
// xyz();


// first class functions
function printName(param1){

    // using function as a parameter
    let firstName = param1();

    // returning functions as values
    return function(){
        console.log('returning with firstname', firstName);
    }
}

var getFirstName = function(){
    return 'Aditya';
}

// using functions as values - here arguments
printName(getFirstName);


setTimeout(function xyz(){
    console.log('timer on line 110');
}, 5000);

function x(y){
    console.log('x');
    y();
}

x(function printing(){
    console.log('y');
})


// event listeners
function attachEventListner(){
    let count = 0;

    // checking if the env is a browser
    var isBrowser=new Function("try{return this===window}catch(e){return false}");
    console.log('is env a browser,', isBrowser());
    if(isBrowser()){
        document.getElementById('clickMe').addEventListener('click', function clickMe(){
            console.log('clicked', ++count);
        })
    }
}

attachEventListner();


// blocking the main thread
setTimeout(() => {
    console.log('this is in call stack queue');
    console.log('setTimeout finished after 5s')
}, 5000);

// time in ms
let startDate = new Date().getTime();
let endDate = startDate;

// update endDate till endDate is 10s more than the start date
// 1s = 1000ms, hence 10s = 10,000 ms
while(endDate > startDate + 10000){
    console.log('main thread blocked, in call stack');
    endDate = new Date().getTime();
}

console.log('while finished after 10s');


