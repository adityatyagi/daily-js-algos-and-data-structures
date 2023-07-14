/**
 * sum the numbers till 1 moving backwards from a given number
 * ex. for n=5, the function will return 5+4+3+2+1
 */

function sumRange(num) {
  // base case
  if (num <= 1) return 1;
  return num + sumRange(num - 1); // the recursive call is being called with a smaller piece (diff data)
}

console.log(sumRange(5));
