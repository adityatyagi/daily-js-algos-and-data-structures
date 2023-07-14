// write a function called sumZero() that accepts a sorted array of integers. the function should find the first pair where the sum is 0 and returns an array that includes both the values or undefined if the pair is not found.

// Method 1: O(n**2)
function sumZeroNaive(arr) {
    let pair = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                pair = [arr[i], arr[j]];
            }
        }
    }

    return pair.length > 0 ? pair : undefined;
}

// console.log(sumZeroNaive([1, -1]));

// Method 2: Multiple Pointer - O(N)
function sumZero(arr) {
    // check if the array is empty
    if (arr.length === 0) {
        return undefined;
    }

    // create two pointers
    let left = 0; //start of the array
    let right = arr.length - 1; // end of the array

    // base condition till we need to play with left and right
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }

        // as the array is a sorted array
        if (sum > 0) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 2]));
