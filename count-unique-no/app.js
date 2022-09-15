// Count unique Numbers

// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8

// O(n^2) quadratic time complexity
var getUniqueCount = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr.length;
}

numArr = [1,1,2,2,3,4,4,5,6,7,8,8];
let res = getUniqueCount(numArr);
console.log('res', res);


// O(n) linear time complexity
var getUniqueCount2 = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]];
    }
    return Object.keys(obj).length;
}

numArr = [1,1,2,2,3,4,4,5,6,7,8,8,9,9,9];
let res1 = getUniqueCount2(numArr);
console.log('res1', res1);


// O(n) linear time complexity
var getUniqueCount3 = function(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

numArr = [1,1,2,2,3,4,4,5,6,7,8,8,9,13,13,14,15];
let res2 = getUniqueCount3(numArr);
console.log('res2', res2);