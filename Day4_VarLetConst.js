//mutability -- the ability to change
// let is mutable, so is var
// const is immutable

//scope
// context in which we can access our variable
//var is FUNCTION scoped
var myVar = "original value"
function test(){
    var myVar = "Bob";
    console.log(myVar)
}
if (true){
    var myVar = "changed value"
}
test()
console.log(myVar)
//let and const are BODY scoped
let myFirstLet = "value"
{
    let myFirstLet = "secondValue"
}
// let myFirstLet = "secondvalue" //this is an error
for (var i = 0; i < 10; i++){
    // do something
}
console.log(i)
for (let i = 0; i < 4; i+=2){

}
// hoisting
// var will hoist its declaration
// let and const will not

// redeclaration
// var will let us redeclare variables that already exist in this scope
// let and const will throw exceptions if we try to redeclare them

console.log(uniqueVariable)
// console.log(alsoUnique) // error: not yet defined
let x = 7;
x = 6;
console.log(x)

const y = 9;
// y = 5; //TypeError  Assignment to constant variable.
console.log(y)

const arr = [];
arr.push("value");


var uniqueVariable = "Bob";
let alsoUnique = "Alice";
console.log(Math.PI)