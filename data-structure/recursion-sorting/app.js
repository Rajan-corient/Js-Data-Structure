// Sorting using Recursive Function
// [2,3,1,4] -> By Default case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> final output

function isSorted (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

let myArray = [2,3,1,4,5,9,23,7,13];
let sortedList = [];
let i = 0;
let j = 1;

let counter = 0;
function sortRecursively(arr) {
    counter++
    // console.log('iteration', +counter);
    if (isSorted(arr)) {
        sortedList = arr;
        return;
    } else if (arr[i] < arr[j]) {
        i++;
        j++;
        sortRecursively(arr);
    } {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = 0;
        j = 1;
        sortRecursively(arr);
    }
}

let numArr = [2,3,1,4];
// sortRecursively(myArray);
sortRecursively(numArr);
console.log('sortedList',sortedList);