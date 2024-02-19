// https://javascript.info/task/shuffle
// Fisher-Yates shuffle: The idea is to walk the array in the reverse order and swap each element with a random one before it:
function shuffle(arr) {
    // return arr.sort(() => Math.random() - 0.5);

    // walk from backwards of the array and replace the number with random one
    for (let i = arr.length - 1; i > 0; i--) {
        // get random index
        let j = Math.floor(Math.random() * (i + 1));

        // replace i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// all possible permutations
let count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    321: 0,
    312: 0,
};

for (let i = 0; i < 10000; i++) {
    let arr = [1, 2, 3];
    shuffle(arr); // inplace and ref to the original arr
    count[arr.join('')]++;
}

// show the object
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
