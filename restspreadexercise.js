//refactor the below code using the rest operator & arrow function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}
//answer below
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

//findMin - write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Use the spread & rest operator.
const findMin = (...args) => Math.min(...args)

//mergeObjects - write a function called mergeObjects that accepts two objects and returns a new object which contains all the key & values of the first object & second object. 
const mergeObjects = (one, two) => ({...one, ...two})

//doubleAndReturnArgs - write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and the additional arguments doubled.
const doubleAndReturnsArgs = (arr, ...args) => [...arr, ...args.map(v => v*2)]

//Slice and Dice - write the follow functions using rest, spread & refactor these functions with arrow functions. 
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

//1. remove a random element in the lines array and return a new array without that item
function removeRandom(items) {}
//answer
const removeRandom = items => {
    let ind = Math.floor(Math.random() * items.length);
    return [...items.slice(0,ind), ...items.slice(ind + 1)];
}
//2. return a new array with every line in array1 & array2.
function extend(array1, array2) {}
//answer
const extend = (array1, array2) => {
    return [...array1, ...array2];
}
//3. return a new object with all the keys & values from object and a new key/value pair
function addKeyVal(obj, key, val) {}
//answer
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
//4. return a new object with a key removed
function removeKey(obj, key) {}
//answer
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}
//5. combine two objects and return a new object
function combine(obj1, obj2) {}
//answer
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
//6. return a new object with a modified key & value
function update(obj, key, val) {}
//answer
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
