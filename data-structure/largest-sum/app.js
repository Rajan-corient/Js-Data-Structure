// [1,2,3,4,3,5,4,6,7,8]   ==> Total elments - 10
// Count largest sum of consecutive digits  (eg-> 4 digit)

// logic
// i = 0;
// j = 1;
// two for loop  outer loop and inner loop

// 7 pairs of conescutive no of 4 digit

// 1,2,3,4,     => 10
// 2,3,4,3,     => 12  
// 3,4,3,5,     => 15
// 4,3,5,4,     => 16
// 3,5,4,6,     => 18
// 5,4,6,7,     => 22
// 4,6,7,8      => 25   (largest sum)

// formula to get first iteration count
// arr.length-num)+1


function largestSum(num, arr) {
    let total = 0;
    for (let i = 0; i < (arr.length-num)+1; i++) {
        let temp = 0;
        for (let j = i; j < num+i; j++) {
            temp += arr[j];
        }
        if (temp > total) {
            total = temp;
        }
    }
    return total;
}

let numArr = [1,2,3,4,3,5,4,6,7,8];
const result = largestSum(4, numArr);
console.log('result', result);