

//program to find the element in array and return its index if not present return -1

  


function negativeCount(arr) {
    const len = arr.length;
    var count = 0;
    for (let i = 0; i < len; i++) {        
        if (arr[i] < 0)
            count += 1;      
    }
    return count;
}
var arr = [1, -10, 30, -5,-12, 6, 23]; 
const result = negativeCount(arr);
console.log("Result is", result);




