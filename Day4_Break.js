// var length = 999999999;
// for(var i=0; i<length; i++) {
//     if(i > 10) {
//         break;
//     }
//     console.log("hello");
// }
// console.log("goodbye");

function findXInArray(array){
    for (var i = 0; i< array.length; i++){
        if(array[i] == "x" || array[i] == "X"){
            break;
        }
    }
    if (i == array.length){
        console.log("X not found")
    } else {
        console.log(`X was found at index ${i}`)
    }
    
}

var array1 = [0,0,0,0,"x",0,0,0,0,0,0,0]
var noX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
findXInArray(array1)
findXInArray(noX)