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
console.log(typeof stringNumber);
console.log(stringNumber);