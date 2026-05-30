 //suppose array contain -2 then or any number can be present in array so better to use -> infinity and -infinity.Check in mdn document.

    // In JavaScript, -Infinity(negative infinity) is a special numeric value that is smaller than any other representable number.
        
    //     In JavaScript, Infinity is a numeric value representing positive infinity that is greater than any other maximum representable number. It is a read-only property of the global object and behaves as a standard numeric primitive type when evaluated.

//program to find the largest  number

//we can do one more thing as we assume my firt arr element is the largest no then compare


function findLargest(arr) {
    const len = arr.length;    
    // var largest = 0;
    var largest = arr[0];
    // var largest = -Infinity;  //this will also work in JS 

   
    for (let i = 0; i < len; i++) {        
        if (arr[i] > largest)
            largest = arr[i];      
    }
    return largest;
}
var arr = [-5, -55, -1, -12]; 
// var arr = [10,12,14,1200,3,11,2500]; 
const result = findLargest(arr);
console.log("Result is", result);




