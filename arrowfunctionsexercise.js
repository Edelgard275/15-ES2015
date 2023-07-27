//write the below callback code in ES2015
function double(arr) {
    return arr.map(function(val) {
        return val *2;
    });
}
//see answer below
const double = arr => arr.map(val => val *2);
//write the below code with arrow functions
function squareAndFindEvens(numbers) {
    var squares = numbers.map(function(num) {
        return num ** 2;
    });
    var evens = squares.filters(function(square) {
        return square % 2 === 0;
    });
    return evens;
}
//see answer below
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)