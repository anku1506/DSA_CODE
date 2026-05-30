
    // In JavaScript, -Infinity(negative infinity) is a special numeric value that is smaller than any other representable number.
        
    //     In JavaScript, Infinity is a numeric value representing positive infinity that is greater than any other maximum representable number. It is a read-only property of the global object and behaves as a standard numeric primitive type when evaluated.

//program to find the smallest  number
//we can do one more thing as we assume my firt arr element is the largest no then compare


function findSmallest(arr) {
    const len = arr.length;  
   
    var smallest = arr[0];


   
    for (let i = 0; i < len; i++) {        
        if ( smallest>arr[i])
            smallest = arr[i];      
    }
    return smallest;
}
var arr = [-5,-55,-1,-12,-122]; 
// var arr = [10,12,14,1200,3,11,2500,1]; 
const result = findSmallest(arr);
console.log("Result is", result);




