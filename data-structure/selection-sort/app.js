// selection sort
// [7,8,2,4,1,3]
// first select min and then swap

function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp; 
        }
    }
    return arr;
}

let numArr = [7,8,2,4,1,3];
let res = selectionSort(numArr);
console.log('res', res);
