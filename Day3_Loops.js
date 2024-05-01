for (
    var num = 0; //initilization this is where we will declare any variables the loop needs  -- runs once at the beginning
    num <= 5; //condition -- this is checked at the beginning of every iteration, loop only runs if true
    num++ //final statement -- generally works towards breaking the loop, runs at the end of every iteration
    ) {
    console.log(num);
}

var val = 0;
val++ // this increase val by 1
val = val + 1; // this increase val by 1
val += 1;// this increase val by 1
val /= 3;

console.log(val)

// for (var i = 0; i <= 200; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

for (var i = 2; i <= 200; i+=2){
    console.log(i)
}

// for(;;){
//     console.log("Forever loop")
// }


// while(condition){
//     code to execute while true
// }
var whileIterator = 2;
while(whileIterator <= 200){
    console.log(whileIterator)
    whileIterator += 2;
}