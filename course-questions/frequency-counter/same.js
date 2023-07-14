function same(arr1, arr2) {
    // check if the two arrays have same length
    if (arr1.length != arr2.length) {
        return false;
    }

    // create two maps
    let counter1 = {};
    let counter2 = {};

    // iterate over 1st array and add numbers of the array as keys and values as the frequency
    for (let item of arr1) {
        counter1[item] = (counter1[item] || 0) + 1;
    }
    // iterate over 2st array and add numbers of the array as keys and values as the frequency
    for (let item of arr2) {
        counter2[item] = (counter2[item] || 0) + 1;
    }

    // check if the keys in counter1 have their squares as keys in counter2
    for (key in counter1) {
        // check if the keys in counter1 is present in counter2 as the square
        if (!(key ** 2 in counter2)) {
            return false;
        }

        // if the frequency are not matching in the two objects
        if (counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
