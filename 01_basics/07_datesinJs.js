// **********************Date**********************
let myDate = new Date();  // creating a new date object with the current date and time
console.log(myDate.toString());  // logs the date object
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); //object

let myCreatedDate = new Date(2026,0,4); //0 becaue in js months start from 0 means 0 index based
let myCreatedDate1 = new Date("2026-01-31"); //in yyyy-mm-dd format can also be used in mm-dd-yyyy format
let myCreatedDate2 = new Date(2026,8,23, 7,34, 23); //year, month, date, hours, minutes, seconds
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now(); //returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //returns the number of milliseconds since January 1, 1970 for the given date
console.log(Math.floor(Date.now()/1000)); //returns the number of seconds 


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday: "long"
})