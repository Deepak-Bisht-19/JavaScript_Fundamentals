// console.log(2 < 1)
// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 <= 1)
// console.log(2 >= 1)


// console.log("2" < 1)
// console.log("02" < 1)

console.log(null > 0)  // false   //in javascript == and >,<,>=,<= behave differently so null > 0 is false but null >= 0 is true
console.log(null == 0)  // false   == not convert null to number but >=,<=,>,< convert null to number
console.log(null >= 0)  // true

console.log(undefined > 0)  // false
console.log(undefined == 0)  // false
console.log(undefined >= 0)  // false

console.log("2" == 2)  // true  == checks only value not data type so it converts string to number and then compares
console.log("2" === 2)  // false   === checks both value and data type so it returns false because one is string and other is number
