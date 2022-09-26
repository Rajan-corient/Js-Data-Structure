// Maximum occuring character in a given string


function getStrCount(str) {
    let map = {};
    let maxCount = 1;
    let maxCountedChar = '';

    for (let i = 0; i < str.length; i++) {
        const chr = str[i];
        map[chr] = map[chr] ? map[chr]+1 : 1;

        if (map[chr] > maxCount) {
            maxCount = map[chr];
            maxCountedChar = chr;
        }
    }

    // console.log('map', map);
    // console.log('maxCount', maxCount);
    // console.log('maxCountedChar', maxCountedChar);

    return maxCount;
}

let res = getStrCount("Hello World");
console.log('maxCount', res);