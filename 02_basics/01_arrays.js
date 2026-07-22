// Array in JavaScript

const myArray = [1, 2, 3, 4, 5];
const myArray2 = [4, 5, 2, 5, 9];

console.log(myArray[2]);

// Array methods

myArray.push(8)  //add an elemt in the array 
myArray.push(4)
myArray.pop()  //remove the last element from the array

myArray.unshift(9)  //add an elemet at the starting of the array
myArray.shift()  //remove the first element from the array

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

console.log(myArray);

const newArray = myArray.join()
console.log(newArray);  // 1,2,3,4,5,8,4  // converts the array to string and returns the string

// slice , splice

console.log("A ", myArray);

const mynewArray = myArray.slice(1, 4)  // slice(startIndex, endIndex)  // returns a new array with the elements from startIndex to endIndex but endIndex is not included
console.log(mynewArray);
console.log("B ", myArray);  // original array is not changed

const mynewArray2 = myArray.splice(1, 4)  
console.log(mynewArray2);
console.log("C ", myArray);  // original array is changed