// Check if given string is palindrome or not

// dad -> dad  -> true;
// level -> level  -> true;
// nayan -> nayan  -> true;
// rajan -> najar  -> true;


// using built in function
function checkPalindrome(str) {
    const arr = str.split('').reverse();
    const revstr = arr.join('');
    if (str.toLowerCase() !== revstr.toLowerCase()) {
        console.log('given string is not palindrome');
        return false;
    }
    console.log('given string is palindrome');
    return true;
}

// const res = checkPalindrome('level');
// console.log('res', res);


// without using built in function using for-loop
function checkPalindrome2(str) {
    const newStr = str.toLowerCase();
    let len = Math.floor(newStr.length/2);
    for (let i = 0; i < len; i++) {
        console.log('no of iterations ' +i);
        if (newStr[i] !== newStr[newStr.length-1-i]) {
            console.log('given string is not palindrome');
            return false;
        }
    }
    console.log('given string is palindrome');
    return true;
}

const res2 = checkPalindrome2('level');
console.log('res2', res2);

// const res3 = checkPalindrome2('rajan');
// console.log('res3', res3);



// without using built in function using while-loop
function checkPalindrome3(str) {
    const newStr = str.toLowerCase();
    let left = 0;
    let right = newStr.length-1;

    while (left < right) {
        console.log('no of iterations ' +left);
        if (newStr[left] !== newStr[right]) {
            console.log('given string is not palindrome');
            return false;
        }
        left++;
        right--; 
    }
    console.log('given string is palindrome');
    return true;
}

const res4 = checkPalindrome3('level');
console.log('res4', res4);