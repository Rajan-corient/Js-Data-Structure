// Recursion: When function calls itself
// If a function calls itself there must be an end point
// otherwise it will get called infinite times


let counter = 1;

function demo (number) {
    if (counter > number) {
       return; 
    }
    console.log('demo ' +counter);
    counter++;
    demo(number);
}

demo(10);


// Buble Sort
// [3,2,5,8,1,4];

// 3,2,5,8,1,4   i=0, j=1

// start: 

// iteration1: 2,3,5,8,1,4
// iteration2: 2,1,3,5,8,4
// iteration3: 2,1,3,4,5,8
// iteration4: 
// iteration5: 

function swap (arr, xp, yp) {
    let temp;
    temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                isSwapped = true;
                swap(arr, j, j+1);
            }
        }
        if (isSwapped === false) {
            return arr;
        }
    }
}

let arr = [3,2,5,8,1,4];
console.log('original array', arr);
let res2 = bubbleSort(arr);
console.log('sorted array', res2);