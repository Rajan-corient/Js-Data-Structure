// // Checking anagram -- problem2
// hello --> lleho


// string letter count
function countLetters (str) {
    let obj = {};
    // for (const item of str) {
    //     if (obj[item]) {
    //         obj[item] += 1;
    //     } else {
    //         obj[item] = 1;
    //     }
    // }

    for (const item of str) {
        obj[item] = (obj[item] + 1) || 1;
    }
    return obj;
}

let res = countLetters('rajan');
console.log('res', res);


// str1 --> hello 
// str2 --> lleho
function isAnalog (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = {};
    for (const item of str1) {
        map[item] = (map[item] || 0) + 1;
    }

    for (const item of str2) {
        if (!map[item]) {
            return false;
        }
        map[item] = map[item] - 1;
    }
    return true;
}

let res1 = isAnalog('hello', 'lleho');
let res2 = isAnalog('hello', 'lllho');

console.log('res1', res1);
console.log('res2', res2);


function isAnalog2 (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let strList1 = arr1.sort()
    let strList2 = arr2.sort();

    for (let i = 0; i < strList1.length; i++) {
        if (strList1[i] !== strList2[i]) {
            return false;
        }
    }
    return true;
}

let res3 = isAnalog2('rajan', 'naraj');
console.log('res3', res3);