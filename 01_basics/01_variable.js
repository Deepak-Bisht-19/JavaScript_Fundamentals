const accountId = 12345;
let accountEmail = "example@example.com";
var accountPassword = "password123";
let accountCity = "indirapuram";
let accountState; // undefined

// accountId = 23;   //not allowed because accountId is a constant
accountEmail = "newemail@example.com";
accountPassword = "newpassword123";
accountCity = "newcity";


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);

/*
prefer not to use var 
because of issue with block scope and and fumction scope
*/

// console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);