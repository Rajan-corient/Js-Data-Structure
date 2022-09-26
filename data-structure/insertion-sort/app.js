// insertion sort
// [7,8,2,4,1,3]
// divide array in two parts 1. sorted array 2. unsorted array
// eg: first element of the array will be considered as sorted array i.e [7]
// and rest other elements will be in unsorted part [8,2,4,1,3]



// quadratic time complexity O(n^2)
function insertionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = arr.length-1; j > 0; j--) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

let numArr = [7,8,2,4,1,3];
let res = insertionSort(numArr);
console.log('res', res);