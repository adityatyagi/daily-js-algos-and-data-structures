/**
 * Factorial
 * 4! = 4 * 3 * 2 * 1
 * 5! = 5 * 4 * 3 * 2 * 1
 */

// iteratively
function factorialInIteration(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
console.log(factorialInIteration(0));

function factorialInRecursive(num) {
  // base case
  if (num === 1) {
    return 1;
  }
  return num * factorialInRecursive(num - 1);
}

console.log(factorialInRecursive(2));
