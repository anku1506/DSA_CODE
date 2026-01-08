console.log("Hello World");

//ex

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum); //30


//let ex

let x = 10;
x = 30;
let y = 20;
console.log(x + y);//50

//ex
let firstName = "Anku";
let lastNAme = "kumar";
console.log(firstName + lastNAme);
console.log(firstName + " " + lastNAme); 


//example
let first = "Anku";
let last = 7;
console.log(first + last);
console.log(first + last); 

//ex - index start from 0 and each index have a value

let arr = [1, 2,"ANku", 3, 4, 5, 6,{key:"Anku"},true,-3,[5,6]]
console.log(arr);
console.log(arr[0]);// 0 is index and value is 1
console.log(arr[8]);//undefined bcz the its not defined on index 8
console.log(arr[7]);



let arr1 = [1, 2, [3, 4], true];
console.log(arr1[2][0]) //here at 2 index of arr1 is array [3,4] and the 2nd item [0] indicates first element of [3,4] so its 3.



//objects- key value pair

let obj = {
    a:7,
    name: "Akshay",
    bool: true,
    arr:[6,7,8,10]
}

console.log("object is : ", obj)
console.log(obj.a);
console.log(obj.name),
console.log(obj.bool)
console.log(obj.arr[2])


