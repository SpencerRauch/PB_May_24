// ! This is important
// TODO: This is something I need to finish later
// * Info
// colors


//nested loops

for (var o = 0; o < 5; o++){ //outerloop runs 5 times

    console.log("I'm running the outer, o is", o )

    for (var i = 0; i < 5; i++){ //innerloop runs 5 times FOR EVERY OUTER LOOP
        console.log("I'm running the inner, i is", i )
    }

    console.log("\n")
}

//5 x 5 = 25 iterations for inner loop