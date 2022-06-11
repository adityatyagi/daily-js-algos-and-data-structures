function oddValues(arr) {
  const result = [];

  function getOffValues(inputArr) {
    // base case
    if (inputArr.length === 0) {
      return;
    }

    if (inputArr[0] % 2 !== 0) {
      result.push(inputArr[0]);
    }
    getOffValues(inputArr.slice(1)); // pop 1 item from the start of the array
  }

  getOffValues(arr);

  return result;
}

console.log(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// pure recursion
function collectOddValues(arr) {
  // approach: concatenate all the arrays at the end
  let num = [];

  if (arr.length === 0) {
    return num; // this array will be returned in every recursive call and at last all of the returned values will be concatenated
  }

  if (arr[0] % 2 !== 0) {
    num.push(arr[0]);
  }

  num = num.concat(collectOddValues(arr.slice(1)));
  return num;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
