const marvel_heros = ["Iron Man", "Captain America", "Thor"];
const dc_heros = ["Batman", "Superman", "Wonder Woman"];

// marvel_heros.push(dc_heros);  // add the dc_heros array inside marvel_heros array
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);  // add the dc_heros inside the marvel_hero array
console.log(all_heros);

const all_heros2 = [...marvel_heros, ...dc_heros];  // add marvel and dc heros in a single array using spread operation
console.log(all_heros2);

const newArray = [1, 2, 3, 4,[5, 6, 7], 8, 5, [9, 10, 11, [12, 13, 14]]];
const new_another_array = newArray.flat(Infinity);  //flat() method create a new array with all sub-array elements
console.log(new_another_array);


console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));  // converts string to array
console.log(Array.from({name:"Deepak"}));   // converts object to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // creates a new array of given elements