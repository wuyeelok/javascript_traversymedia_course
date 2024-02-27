/* //  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
 */

function subtract(a, b) {
  return a - b;
}

const sub = (a, b) => a - b;

console.log(sub(5, 3) === subtract(5, 3));

const returnObj = () => ({
  name: "Tom",
  age: 56,
});
console.log(returnObj());

const myNum = [2, 4, 6, 8, 10];

myNum.forEach((n) => console.log(n));
