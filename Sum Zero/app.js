// Checking sum zero -- problem1
// [-5, -4, -3, -2, 0, 2, 4, 6, 8];   --> Input
// [-4, 4]  --> Output

let numList = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// O(n^2)  quadratic time complexity

// (array should be sorted for this solution)
function getSumZeroPair(arr) {  
    for (const item of arr) {
        console.log('Outer loop');
        for (let index = 1; index < arr.length; index++) {
            const element = arr[index]; 
            console.log('Inner loop'); 
            if (item + element === 0) {
                return [item, element];
            }
        }
    }
}

const result = getSumZeroPair(numList);
console.log(result);


// O(n)  linear time complexity
// let numList = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
function getEfficientSumZeroPair(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            right--;
        }           
        if (sum < 0) {
            left++;
        }
    }
}

// using for loop
function getEfficientSumZeroPair2(arr) {
    let sum = 0;
    let right = arr.length - 1;
    for (let left = 0; left < right; (sum < 0) ? left++ : right--) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            right--;
        }           
        if (sum < 0) {
            left++;
        }
    }
}

let numList1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
let numList2 = [-5, -4, -3, -2, 0, 2, 3, 6, 8];

const result1 = getEfficientSumZeroPair(numList1);
console.log(result1);

const result2 = getEfficientSumZeroPair2(numList2);
console.log(result2);



