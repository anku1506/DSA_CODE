//digit =7895 output= 4




let n = 7895;
let count = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    count++;

    

}
console.log(count);


//some corner cases.suppose n is 0 or negative


function countDigits(num) {
    num = Math.abs(num); // convert negative to positive//always return positive no

    if (num === 0) {
        return 1;
    }

    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);   //The Math.floor() method rounds a number DOWN to the nearest integer
    }

    return count;
}

console.log(countDigits(7895));   // 4
console.log(countDigits(0));      // 1
console.log(countDigits(-7895));  // 4



