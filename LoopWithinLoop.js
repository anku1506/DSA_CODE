//loop inside a loop


// for (i = 0; i < 3; i++){
//     for (j = 0; j < 3; j++){
//         console.log("i=" + i + "  J=" + j);
        
//     }

// }


// for (i = 0; i < 5; i++){
//     for (j = 0; j <= i; j++){
//         console.log("i=" + i + "  J=" + j);
        
//     }

// }


for (i = 0; i < 3; i++){
    for (j = i; j > 0; j--){
        console.log("i=" + i + "  J=" + j);
        
    }

}