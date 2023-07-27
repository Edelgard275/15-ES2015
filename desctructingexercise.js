//OD 1. Object Desctructuring #1 - What does the following code return/print?
//let facts = {numPlanets: 8, yearsNeptuneDiscovered: 1846};
//let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets); // 8
//console.log(yearNeptuneDiscovered); // 1846

//OD 2. Object Destucturing #2 - What does the following code return/print?
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1696
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1696}

//OD 3. What does the following code return/print?
// function getUserData ({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like $(favoriteColor)`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
// getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
// getUserData({}) // Your name is undefined and you like green

//AD 1. What does the following code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // "Maya"
// console.log(second); // Marisa
// console.log(third); // Chi

//AD 2. What does the following code return/print?
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // "Raindrops on roses"
//   console.log(whiskers); // "Whiskers on kittens"
//   console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//AD 3. WHat does the following code return/print?
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10, 30, 20]

//ES2015 Refactoring
//1. ES2015 Object Destructuring
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
// answer:
// const obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

// const {a,b} = obj.numbers

//2. ES2015 One-Line Array Swap with Destructuring
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
// //answer:
// [arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()
//Write a function called raceResults that accepts a single array argument. It should return an object with the keys first, second, third & rest.
//first: the first element in the array
//second: the second element in the array
//third: the third element in the array
//rest: all other elements in the array
//write a one-line function to make this work using an arrow function, destructuring & enhanced object assignemtn (same key/value shortcut)
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
//answer
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})