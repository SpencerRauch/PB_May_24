//Conditionals!
// a statement to resolves to a boolean value
/*


if (condition) {    
    what to do if condition is true
}
else if (2nd condition) { // can have 0 to many of these statements    
    what to do if 2nd condition is true
}
else {  // can have 0 or 1 of these statements    
    what to do if none of the previous conditions are met
}
*/

//Belt Grades at the Dojo
//Red, Black, Orange
// Red score greater than 8 with a time of less than 5 hours
// Black score greater than or equal 9.5 with a time of less than 5 hours
// Orange score greater than 8 with a time between 5 hours and 8 hours

var score = 8.5;
var time = 7.5;
if (score < 8){
    console.log("Let's study up and prepare for the next attempt");
} else if (time > 5){
    console.log("Congrats on the Orange belt!~");
} else if ( score >= 9.5){
    console.log("Excellent work! Black belt!");
} else {
    console.log("Red belt acheived!")
}


var num1 = 50;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);

var one = 1;
var stringOne = "1";
// "1" === "1"
console.log(one == stringOne); // double equal will attempt to type match the two arguments
console.log(one === stringOne); // triple equals will do no such thing! compare as they are

var hungry = true;
var thirsty = true;

if ( hungry && thirsty){
    console.log("Get me a full meal and drink plz!")
}

if (hungry || thirsty){
    console.log("They're going to need something")
}

// true && true   --  true
// true && false  --  false

// true || true  -- true
// true || false -- true
// console.log( false || false && true)

