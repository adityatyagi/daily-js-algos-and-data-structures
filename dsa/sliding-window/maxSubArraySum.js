// T: O(N^2) - iterative solution
function maxSubArraySum(arr, n) {
    // if the array is empty or the length of the array is less than the consecutive numbers we want to add
    if (arr.length === 0 && arr.length < n) return null;
    if (!n || n === 0) return null;

    let max = -Infinity; // because the array can have -ve integers too and the sum of all -ve integers will be negative

    // iterate over the array, but NOT till the end, as we have to iterate till the "n" positions from end of the array
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (max < temp) {
            max = temp;
        }
    }
    return max;
}

// T: O(N) - sliding window
function maxSubArraySum2(arr, num) {
    if (arr.length === 0 || arr.length < num) return null;
    if (!num) return null;

    let max = 0;
    let temp = 0;

    // iterate and sum the first "num" consecutive numbers
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    // iterate over the rest of the array starting from "num" and then subtracting the number previously added and adding the new number to keep the window of size "num"
    for (let j = num; j < arr.length; j++) {
        temp = temp - arr[j - num] + arr[j];
        max = Math.max(temp, max);
    }
    return max;
}

console.log(maxSubArraySum2([1, 2, 3], 2));
