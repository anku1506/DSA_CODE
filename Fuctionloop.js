

//program to find the element in array and return its index if not present return -1

var arr = [1, 10, 30, 5, 6, 23];   


function searchElement(arr, found) {
    const len = arr.length;
    for (let i = 0; i < len; i++){
        if (found == arr[i])
            return i;       
    } 
    return -1; 
}

const result = searchElement(arr, 12);
if (result == 1) {
    console.log("found at index = " + result );    
}else console.log("Elemnt not found so result is = -1" )



