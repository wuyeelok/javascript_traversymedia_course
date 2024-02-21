/* let x;

// Square root
x = Math.sqrt(9);

// Absolute value
x = Math.abs(-5);

// Round
x = Math.round(4.2);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.9);

// Exponent
x = Math.pow(2, 3);

// Minimum number
x = Math.min(4, 5, 3);

// Maximum number
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);

console.log(x);
 */
console.log(Math);

let x = Number(Math.sqrt(17)).toFixed(2);
console.log(x);

const tempNum = 4.45645723;
console.log(Math.floor(tempNum));

const tempNum2 = Math.pow(4, 2);
console.log(tempNum2, typeof tempNum2);

// Random
const dice = Math.floor(Math.random() * 6 + 1);

console.log(dice);
