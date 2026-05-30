// sol 1: we sort the array and then found.

// function secondLargest(arr) {
//     const len = arr.length;
//     const arr1 = arr.sort((a,b)=>a-b);   
//     return arr1[len-2];
    
// }
// let arr = [4, 9, 2, 12,120, 87, 99, 121, 88];
// const result = secondLargest(arr);
// console.log(result);

// sol2: using loops

function secondLargest(arr1) {  
    if (arr1.length < 2) return "Atleast 2 number should present";
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i <arr1.length; i++){
        if (arr1[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr1[i];
        }
        else if (arr1[i] > secondLargest && arr1[i] != firstLargest) {
            //&& arr1[i]!=firstLargest - added to check duplicates
            secondLargest=arr1[i]
        }        
    }
    return secondLargest;
    
    
}
let arr1 = [12,23,23,12,56,-1,9,56,18,20];
const result = secondLargest(arr1);
console.log(result);

