// ****
// ****
// ****
// ****

// for (let i = 0; i < 4; i++){
//     let row = "";
//     for (j = 0; j < 4; j++){
//         row += " *";

//     }    console.log(row);
   

// }



// *
// **
// ***
// ****


// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (j = 0; j <= i; j++) {
//         row += " *";

//     } console.log(row);
   
// }



// 1
// 12
// 123
// 1234


// for (let i = 0; i <5; i++) {
//    let row = "";
//     for (j = 0; j <= i; j++) {
//         // row += j+1;  //similar to below
//         row = row + (j + 1);
       

//     }
//     console.log(row);
   
// }


// 1
// 22
// 333
// 4444


// for (let i = 0; i <5; i++) {
//    let row = "";
//     for (j = 0; j <= i; j++) {
       
//         row = row + (i + 1);
       

//     }
//     console.log(row);
   
// }


// 12345
// 1234
// 123
// 12
//1
// let n = 5;
// for (let i = 0; i <n; i++) {
//    let row = "";
//     for (let j = 0; j < n-i; j++) {
//         row = row + (j + 1);

//     }
//     console.log(row);
   
// }

//     *
//    **
//   ***
//  ****
// *****
// n = 5;
// for (i = 0; i < n; i++){  //this loop for row 
//     row = "";
//     for (j = 0; j < n -(i+1);j++) //this is for empty spaces
//     {
//         row = row + " ";

//     }
//     for (k = 0; k < i + 1; k++){  //this is for adding * after empty space
//         row = row + "*";
//     }

//     console.log(row);    //finally printing


// }


// 1
// 10
// 101
// 1010

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row =row + (j % 2);
//     }

//     console.log(row);
// }


// sol 2:

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    let toggle = 1;

    for (let j = 1; j <= i; j++) {
        row += toggle;

        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}
