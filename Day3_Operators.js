// Remainder Operator
// gives us the left over value after an integer division

var remainder = 10 % 6;
// console.log(remainder)

var number = 11;
var isEven = number % 2 == 0;
// console.log(`It is ${isEven} that ${number} is even` )

var result = 100 % 9;
// console.log(result)


var num1 = 7.2;
var num2 = 7.8;
var num3 = -7.2;
var num4 = -7.8;

// Math. floor, ceil, round, trunc

//rounding to the left in the number line
// console.log(Math.floor(num1)) // 7
// console.log(Math.floor(num2)) // 7
// console.log(Math.floor(num3)) // -8
// console.log(Math.floor(num4)) // -8

//rounding to the right in the number line
// console.log(Math.ceil(num1)) // 8
// console.log(Math.ceil(num2)) // 8
// console.log(Math.ceil(num3)) // -7
// console.log(Math.ceil(num4)) // -7

//rounds to the closest whole integer
// console.log(Math.round(num1)) // 7
// console.log(Math.round(num2)) // 8
// console.log(Math.round(num3)) // -7
// console.log(Math.round(num4)) // -8

//trunc 
console.log(Math.trunc(num1)) // 7
console.log(Math.trunc(num2)) // 7
console.log(Math.trunc(num3)) // -7
console.log(Math.trunc(num4)) // -7