function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                // swap
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return arr;
}

let sortedArray = bubbleSort([3,2,4,1,9,6]);
console.log(sortedArray);