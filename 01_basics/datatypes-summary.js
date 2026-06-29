//  Primitive data types

/*  7 Types of primitive data types in javascript
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null // object type but it is primitive data type
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // false because symbol is unique and cannot be equal to another symbol even if they have same description

const bigNumber = 34567890123456789012345678901234567890n //undefined 



/*  Reference data types (non-primitive data types)
1. Object
2. Array
3. Function
*/

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "deepak",
    age: 22
}

const myFunction = function() {
    console.log("hello world")
}


// https://262.ecma-international.org/5.1/#sec-11.4.3





// *******************************Memory allocation in javascript*******************************

//  Stack (primitive data types), heap (non-primitive data types)

let myName = "deepak"  // stored in stack memory because it is primitive data type

let anotherName = myName  
anotherName = "bsiht"  // changing anotherName will not change myName because they are stored in different memory locations

console.log(myName)  // deepak
console.log(anotherName)  // bsiht


let userOne = {  // stored in heap memory because it is non-primitive data type
    name: "deepak",
    age: 22
}

let userTwo = userOne  // both userOne and userTwo point to the same memory location in heap memory
userTwo.age = 23  // changing userTwo will also change userOne because they are stored in the same memory location

console.log(userOne.age)  // 23
console.log(userTwo.age)  // 23