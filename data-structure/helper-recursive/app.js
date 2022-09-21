// Helper recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,2,5,7,9]  --> output

let numArr = [1,2,3,4,5,6,7,8,9,10];
let oddNumArr = [];

const helperRecursive = function (numList) {
    if (numList.length === 0) {
        return;
    }
    if (numList[0]%2 !== 0) {
        oddNumArr.push(numList[0]);
    }
    helperRecursive(numList.slice(1));
}

let getOddNo = function (arr) {
    helperRecursive(arr);
    return oddNumArr;
}

let res = getOddNo(numArr);
console.log('res', res);