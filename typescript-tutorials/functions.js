"use strict";
// named functions in typescript
function add(a, b) {
    return a + b;
}
console.log(add(5, 8));
//arrow functions in typescript
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(6, 2));
// function expression
const multiply = function (num3, num4) {
    return 3 * 4;
};
console.log(multiply(3, 3));
// optional parameters in functions
// this returns 3 parameters IF there is a third parameter. If not, it runs
// with two parameters.
function addMore(num5, num6, num7) {
    return num7 ? num5 + num6 + num7 : num5 + num6;
}
console.log(addMore(4, 5, 5));
//rest parameters in functions
function numbers(firstNumber, secondNumber, ...thirdNumber) {
    return firstNumber + secondNumber + thirdNumber.reduce((a, b) => a + b, 0);
}
console.log(numbers(2, 3, ...[4, 5, 6]));
