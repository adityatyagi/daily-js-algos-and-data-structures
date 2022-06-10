/**
 * Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

const minSubArrayLen1 = (arr, n) => {
  let minLength = -Infinity;
  let minLengthArray = [];
  let i = 0;
  let j = 0;
  let sum = 0;

  // sort in ascending order array - it is also default sorting by array.sort()
  // default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
  /**
   * sort (a,b)
   * for a-b
   * if a-b > 0, sort a after b (because by default its ascending)
   * if a-b < 0, sort a before b
   * if a-b=0, keep the original order
   */
  arr = arr.sort((a, b) => {
    let diff = 0;
    if (a - b > 0) {
      diff = 1; // change the order. b < a
    } else if (a - b < 1) {
      diff = -1; // b > a
    } else {
      diff = 0; // keep the original positions
    }
    return diff;
  });

  while (i < arr.length - 1) {
    sum += arr[j];

    if (sum >= n) {
      minLength = j - i + 1;
      minLengthArray.push(minLength);
      i++;
      j = i;
      sum = 0;
    } else if (sum < n && j !== arr.length - 1) {
      j++;
    } else {
      i++;
    }
  }

  if (minLengthArray.length) {
    return Math.min(...minLengthArray);
  } else {
    return 0;
  }
};

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to right
//     if (total < sum && end < nums.length) {
//       total += nums[end];
//       end++;
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       minLen = Math.min(minLen, end - start);
//       total -= nums[start];
//       start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

const minSubArrayLen = (arr, sum) => {
  let start = 0;
  let end = 0;
  let minLength = Infinity; // minimum length is required
  let total = 0;

  // loop through the array till arr length
  while (start < arr.length) {
    // if total < sum & end is less than arr.length - expand the window
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++; // expanding the window
    } else if (total >= sum) {
      minLength = Math.min(minLength, end - start);

      // subtract the start from the total to get the remaining elements sum
      total -= arr[start];

      // shrink the window by moving start to right and keeping the end as is
      start++;
    } else {
      // if start > arr.length but total < sum
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen([2, 3, 1, 2, 3, 4], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 9));

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
