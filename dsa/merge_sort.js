function mergeSort(arr){
    // base case
    if(arr.length < 2){
        return arr;
    }

    const length = arr.length;
    const middle = Math.floor(length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, length);
    
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);
}

function stitch(left, right){
    let results = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    while(left.length){
        results.push(left.shift());
    }

    while(right.length){
        results.push(right.shift());
    }

    return results;
}

console.log(mergeSort([2,1,3,7,4,5,9,7]));