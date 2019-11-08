function quickSort(arr){
    // base case
    if(arr.length < 2){
        return arr;
    }

    const pivot = arr[arr.length-1]; // set pivot as the last element of the array
    let left = [];
    let right = [];

    // create left and right arrays w.r.t pivot
    for(let i=0; i<arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}

console.log(quickSort([2,1,3,7,4,5,9,7]));