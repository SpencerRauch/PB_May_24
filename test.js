// ! This is important
// TODO: This is something I need to finish later
// * Info
// colors


//nested loops

for (var x = 0; x < 5; x++){ //outerloop runs 5 times
    console.log("I'm running the outer, x is",x )
    for (var o = 0; o < 5; o++){ //innerloop runs 5 times FOR EVERY OUTER LOOP
        console.log("I'm running the inner, o is",o )
    }
    console.log("\n")
}

//5 x 5 = 25 iterations for inner loop