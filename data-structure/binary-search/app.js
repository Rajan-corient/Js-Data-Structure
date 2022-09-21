// binary search 
// divide and conquerer technique
// find index of given no in a sorted array ... no is 12 
// [1,2,3,6,7,11,12,15,16];  ===>  output = index 6

// min = 0, index = 0 element = 1
// max = arr.length-1, index = 8 element = 16
// midIndex = (min+max)/2  ==> (0+8) => 4(index), element = 7

// if array[midIndex](7) < number(12)
// min = midIndex + 1   
// min = 4 +1 = 5
// max = 8
// midIndex = (min+max)/2  ==> (5+8)/2 ==> Math.floor(6.5) => 6

// if array[midIndex](12) > number(12)
// max = midIndex - 1

// if array[midIndex](12) == number(12)
// result is midIndex i.e ==> 6

// time complexity binary O(log(n))
function searchAlgo (arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let midIndex = Math.floor((min+max)/2);
        console.log('midIndex '+midIndex, 'min '+min, 'max '+max);
        if (arr[midIndex] < num) {
            min = midIndex + 1;
        } else if (arr[midIndex] > num) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}

let numArr = [1,2,3,6,7,11,12,15,16];
let result = searchAlgo(numArr, 6);
console.log('result', result);


