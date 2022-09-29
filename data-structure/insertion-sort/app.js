// insertion sort
// [7,8,2,4,1,3]
// divide array in two parts 1. sorted array 2. unsorted array
// eg: first element of the array will be considered as sorted array i.e [7]
// and rest other elements will be in unsorted part [8,2,4,1,3]


// quadratic time complexity O(n^2)
function insertionSort(arr, n) {
    let i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key;
    }
    return arr;
}

let numArr = [12, 11, 13, 5, 6];
let n = numArr.length;
let res = insertionSort(numArr, n);
console.log('res', res);