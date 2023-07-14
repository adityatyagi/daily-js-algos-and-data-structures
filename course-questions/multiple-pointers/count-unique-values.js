/*

Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.

*/

function countUniqueValues(array) {
    // check if the array has numbers
    if (!array.length) {
        return 0;
    }

    // array has numbers and they are always sorted
    // using 2 pointers
    let i = 0; // will also serve as the number of unique values in the array (+1 as index = 0)
    let j = i + 1;

    // traversing the array
    while (j < array.length) {
        if (array[i] === array[j]) {
            j++;
        } else {
            i++;
            array[i] = array[j];
            j++;
        }
    }
    return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
