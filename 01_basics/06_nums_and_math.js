const score = 100;
console.log(score);  // 100

const balance = new Number(100);  // creating number using number constructor // it is not recommended to use number constructor because it creates an object and not a primitive data type
console.log(balance);  // [Number: 100]

console.log(balance.toString());  // 100  // converts the number to string
console.log(balance.toFixed(2));  // 100.00  // converts the number to string with 2 decimal places

const otherNumber = 123.456789;
console.log(otherNumber.toPrecision(4)); // 123.5  // converts the number to string with specified precision

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));  // 1,00,00,000  // converts the number to string with specified locale format


// ************************Maths************************

console.log(Math);  // logs the Math object //visible in detail in browser console but not in node.js console
console.log(Math.abs(-7)); // 7 //returns the absolute value //means converts neg(-) to pos(+) but not pos(+) to neg(-)
console.log(Math.round(4.7)); // 5 //rounds the number to nearest integer
console.log(Math.ceil(4.2)); // 5 //rounds the number up to the nearest integer
console.log(Math.floor(4.8)); // 4 //rounds the number down to the nearest integer
console.log(Math.min(4,7,1,9,0)); // 0 //returns the minimum value
console.log(Math.max(4, 7, 1, 9, 0)); // 9 //returns the maximum value

console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log((Math.random() * 10) + 1); // returns a random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random number between min and max values including min and max values