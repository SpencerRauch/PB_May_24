//What is function?
// a piece of code that has to be called to complete some action
// a function call is replaced by its return
// every function has a return -- even if we don't define it
// we can information into a function with parameters/arguments <-- input
function count(start, stop){
    var countNums = [];
    console.log("running count function")
    if (start > stop){
        var temp = start;
        start = stop;
        stop = temp;
    }
    for( var i = start; i < stop; i++){
        countNums.push(i);
    }
    return countNums; // a return sends information out and finishes the function
    console.log("Some more code for this function!")
}

console.log(result)
function myFirstFunction() {
    console.log("My first function is running")
}

myFirstFunction();
myFirstFunction();
myFirstFunction();



count(5,16);
var result = count(3,8);
// console.log(result)

var isThisData = console.log("no its not")
// console.log(isThisData)
// console.log(countNums)

