// Longest substring without repeating characters

// Input: str => "abcabcbb"
// Output: 3
// Explanation: The answer is "abc" with the length of 3


var lengthOfLongestSubstring = (str) => {
    let mySet = new Set();
    let start = 0;
    let end = 0;
    let maxLength = 0;

    if (!str) {
        return 0;
    }

    while (end < str.length) {
        if (!mySet.has(str[end])) {
            mySet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, mySet.size);
        } else {
            mySet.delete(str[start]);
            start++;
        }
    }
    // console.log('mySet', mySet);
    return maxLength;
}

let res = lengthOfLongestSubstring("abcabcbb");
let res2 = lengthOfLongestSubstring("pwwkew");
console.log('res', res);
console.log('res2', res2);