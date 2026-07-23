// singleton
//Object.create


//Object literals

const mySym = Symbol("key1");

const person = {
    name: "Deepak",
    "full name": "Deepak Bisht",
    [mySym]: "myKey1",
    age: 24,
    location: "india",
    email: "deepak@example.com",
    isLoggedIn: false
}

console.log(person.email);
console.log(person["email"]);
console.log(person["full name"]);
console.log(person[mySym]);


person.email = "deepak@gmail.com";
// Object.freeze(person); // freeze the object so that no changes can be made to it
person.email = "deepak@outlook.com"; // this will not work because the object is frozen
console.log(person);

person.greeting = function() {
    console.log("Hello Deepak");
}
person.greeting2 = function() {
    console.log(`Hello Deepak , ${this.name}`);
}

console.log(person.greeting());
console.log(person.greeting2());