// Recursion: When function calls itself
// If a function calls itself there must be an end point
// otherwise it will get called infinite times


let counter = 1;

function demo (number) {
    console.log('demo ' +counter);
    counter++
    demo()
}