// What will log to console the following code snippet:
function createIncrement() {
    let count = 0;
    function increment() { 
      count++;
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log(); // count is 0


  // Restore encapsulation
  // The following function createStack() creates instances of stack data structure. Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope:

  function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  
  stack.items; // => [10]
  console.log("🚀 ~ stack.items:", stack.items) // undefined


  //Smart multiplication
  // Write a function multiply() that multiples 2 number. If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments. But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.
  /**
    multiply(4, 5); // => 20
    multiply(3, 3); // => 9

    const double = multiply(2);
    double(5);  // => 10
    double(11); // => 22
*/

    function multiply(num1, num2){
    if(num2) return num1 * num2;
    return (num2) => {
        return num1 * num2;
    }
}
console.log(multiply(4,5));
console.log(multiply(3,3));

const double = multiply(2);
console.log(double(5));  // => 10
console.log(double(11)); // => 22 


// output based
function x(){
    var i = 0;
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
x(); // 0


// print 1,2,3,4 after 1,2,3,4 sec...
for (var index = 0; index < 5; index++) {

    // the function close will have a new variable everytime it is called with the updated value of index and hence form a closure
    function close(j){
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    }
    close(index);
}

// using IIFE
// for (var index = 0; index < 5; index++) {
//     setTimeout(function(i_local){
//         return function(){
//             console.log(i_local);
//         }
//     }(index), index * 1000);
// }

// How would you use a closure to create a private counter?
function counter(){
    let counter = 0;
    return {
            increment: function (num){
                counter += num;
            },
        getCurrentValue: function(){
            return counter;
        }
    }
}
let c1 = counter();
c1.increment(1);
c1.increment(1);
c1.increment(1);
c1.increment(1);
console.log('c1.getCurrentValue()', c1.getCurrentValue())


 
