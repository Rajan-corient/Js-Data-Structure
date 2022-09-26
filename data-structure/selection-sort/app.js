// selection sort
// [7,8,2,4,1,3]
// first select min and then swap
//  [7,8,2,4,1,3]
//  pass1:  i=0   [1,8,2,4,7,3]
//  pass2:  i=1   [1,2,8,4,7,3]
//  pass3:  i=2   [1,2,3,4,7,8]
//  pass4:  i=3   [1,2,3,4,7,8]
//  pass5:  i=4   [1,2,3,4,7,8]


// quadratic time complexity O(n^2)
function selectionSort (arr) {
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
