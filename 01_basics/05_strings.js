const name = "deepak";
const repoCount = 12;

// console.log(name + repoCount);  // deepak12

console.log(`Hello ${name} you have ${repoCount} repo`);  // Hello deepak you have 12 repo //string interpolation

const myGreeting = new String("Hello-world");  // creating string using string constructor // it is not recommended to use string constructor because it creates an object and not a primitive data type

console.log(myGreeting[0]);  // H

console.log(myGreeting.__proto__);  // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …} // prototype of string object

console.log(myGreeting.length);  // 11
console.log(myGreeting.toUpperCase());  // HELLO-WORLD
console.log(myGreeting.charAt(2));  // l
console.log(myGreeting.indexOf("e"));  // 1

// in substring method we can specify the start and end indices to extract a portion of the string
const newString = myGreeting.substring(0, 4);  // Hell  //only first 4 characters will be taken from the string and stored in newString variable
console.log(newString);  // Hell //from 1st index to 4th index but 4th index will not be included

// in slice method we can use negative index to get the characters from the end of the string but not in substring method
const anotherString = myGreeting.slice(-9, 7);  // -9 means 9th index from the end of the string and 7 means 7th index from the start of the string but 7th index will not be included
console.log(anotherString);  // llo-W

const newStringOne = "      deepak      ";
console.log(newStringOne);  //       deepak      // string with white spaces at the start and end of the string
console.log(newStringOne.trim());  // deepak  // removes the white spaces from the start and end of the string

const URL = "https://www.deepak.com/deepak%20bisht";
console.log(URL.replace("%20", "-"));  // https://www.deepak.com/deepak-bisht  // replaces the first occurrence of %20 with - in the string

console.log(URL.includes("deepak"));  // true  // checks if the string contains the specified substring or not

console.log(URL.split("/"));  // ["https:", "", "www.deepak.com", "deepak%20bisht"]  // splits the string into an array of substrings based on the specified separator