// checking square in the another array
// arr1 = [1,2,3,4], arr2 = [1,9,16,4]   order dosent matters
// output ==> true if square found else false

// quaratic time complexity O(n^2)
function checkSquare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true;
            }
            if (j === arr2.length-1) {
                if (!isSquare) {
                    return false;
                }
            }
        }
    }
    return true;
}
const res1 = checkSquare([1,2,3,4], [1,9,4,16]);
console.log('res1', res1);


// arr1 = [1,2,4,2],  arr2 = [1,4,4,16]
// map1 = {1:1, 2:2, 4:1}
// map2 = {1:1, 4:2, 16:1}

// Note ==> map2 keys will be the square of map1's keys  (logic)
// and values of map1 key and map2 key will be same

// linear time complexity O(n)
function checkSquareEfficient(arr1, arr2) {
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < arr1.length; i++) {
        map1[arr1[i]] = (map1[arr1[i]] || 0) + 1;
    }
    for (let j = 0; j < arr2.length; j++) {
        map2[arr2[j]] = (map2[arr2[j]] || 0) + 1;
    }
    console.log('map1', map1);
    console.log('map2', map2);

    for (const key in map1) {
        if (!map2[key*key]) {      // checking obj key
            return false;
        }   
        if (map1[key] !== map2[key*key]) {     // value compare
            return false;
        }
    }
    return true;
}

const res2 = checkSquareEfficient([1,2,3,4], [1,9,4,16]);
const res3 = checkSquareEfficient([1,2,4,2], [1,4,4,16]);
console.log('res2', res2);
console.log('res3', res3);