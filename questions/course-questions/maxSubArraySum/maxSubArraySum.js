// T - O(N2)
// S - O(1)
const maxSubArraySum1 = (arr, n) => {
  if (n > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      // this is adding already visited number. So this approach is okay for small arrays but for large arrays (length > 20), it will be a problem as on every iteration, it will be re-adding 19 numbers which it added in the last + 1 new number
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
};

// O(N)
const maxSubArraySum2 = (arr, n) => {
  if (n > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  // adding first n digits
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // looping from index "n" to end of the array
  // subtracting the 1st digit and adding the current
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArraySum2([100, 200, 300, 400], 2));
