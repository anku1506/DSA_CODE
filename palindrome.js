//check no is palindrome or not

let n = 1214;
let reverse = 0;
let temp = n;

while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log("Reverse no is "+reverse);
if (reverse == n) {
    console.log(Palindrome);
}
else { console.log("not Palindrome") }

