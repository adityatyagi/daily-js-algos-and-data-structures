
// recursive solution
function flat(arr, depth = 1){
    // base
    if(depth < 1){
        return arr.slice();
    }

    const result = arr.reduce((resultantArray, currentItem) => {
        return resultantArray.concat(Array.isArray(currentItem) ? flat(currentItem, depth - 1) : currentItem)
    }, [])
    return result;
}

const arr = [1, [2], [3, [4]]];


console.log("🚀 ~ flat(arr):", flat(arr,))
// [1, 2, 3, [4]]


console.log("🚀 ~ flat(arr, 1):", flat(arr, 1))
// [1, 2, 3, [4]]


console.log("🚀 ~ flat(arr, 2):", flat(arr, 2))
// [1, 2, 3, 4]
