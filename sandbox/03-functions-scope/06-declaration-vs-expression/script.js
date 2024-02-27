/* // Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
 */

console.log(normalFun("Good Morning")); // Hoisting
function normalFun(value) {
  return `${value}!`;
}

const cap1stLetter = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(cap1stLetter("mary"));
