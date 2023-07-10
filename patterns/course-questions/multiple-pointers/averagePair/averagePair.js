/**
 Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

// O(n2)
function averagePairMine(arr, avg) {
  // return false if the array is empty
  if (!arr || arr.length === 0 || !avg) {
    return false;
  }
  // add whatever parameters you deem necessary - good luck!
  let isAvgPairPresent = false;

  // loop through the array from starting index to end of the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const avgOfPair = (arr[i] + arr[j]) / 2;
      if (avgOfPair === avg) {
        isAvgPairPresent = true;
        break;
      }
    }
  }
  return isAvgPairPresent;
}

// O(N)
const averagePair = (arr, num) => {
  // edge case - empty and invalid
  if (!arr || arr.length === 0 || !num) {
    return false;
  }

  // using MP (multiple pointer)
  let start = 0;
  let end = arr.length - 1;

  // while start < end
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === num) return true;

    if (avg < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

module.exports = averagePair;

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 8));
console.log(averagePair([], 4));
