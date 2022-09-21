// linear search algorithm

const users = [
    {userName: 'sanjay', email: 'sanjay@gmail.com'},
    {userName: 'anil', email: 'anil@gmail.com'},
    {userName: 'rajan', email: 'rajan@gmail.com'}
]

// time complexity linear O(n) 
function isUserExist(arr, value) {
    for (const item of arr) {
        if (item.userName === value) {
            return true;
        }
    }
    return false;
}

const res = isUserExist(users, "rajan");
console.log('res', res);