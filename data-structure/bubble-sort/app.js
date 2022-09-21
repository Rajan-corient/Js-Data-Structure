// Bubble Sort Algorithm
// A sorting algorithm where largest value bubles up at the top

function bubbleSort2(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log('outer loop', +i, 'inner loop', +j);
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    console.log('sorted array', array);
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        isSwapped = false;
        for (let j = 0; j < array.length-i-1; j++) {
            console.log('outer loop', +i, 'inner loop', +j);
            if (array[j] > array[j+1]) {
                isSwapped = true;
                [array[j], array[j+1]] = [array[j+1], array[j]];
                // swap(arr, j, j+1);
            }
        }
        if (!isSwapped) {
            return array;
        }
    }
}

function swap (arr, xp, yp) {
    let temp;
    temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

let arr = [5,3,4,1,2,8,6,7];
let res = bubbleSort(arr);
console.log('sorted array', res);
// bubbleSort2(arr);