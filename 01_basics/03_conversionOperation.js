// Conversion Operations 

let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);  // convert string to number or vice versa
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// "33" => 33
// "33abc" => NaN (Not a Number)
// "abc" => NaN (Not a Number)
// true => 1 , false => 0
// null => 0
// undefined => NaN



let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "string" => true
// "" => false

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);



// *********************************operations*********************************

let value = 8;
let negValue = -value; // -8
// console.log(negValue);

let str1 = "Hello";
let str2 = "World"; // " world"   if space is given before the string
let str3 = str1 + " " + str2; // str1 + str2 => "Hello World"  no need for space " "
// console.log(str3);

// console.log("1" + 1); // "11"
// console.log(1 + "1"); // "11"
// console.log("1" + 2 + 1); // "121"
// console.log(1 + 2 + "1"); // "31"

// console.log(+true); // => 1
// console.log(+""); // => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion