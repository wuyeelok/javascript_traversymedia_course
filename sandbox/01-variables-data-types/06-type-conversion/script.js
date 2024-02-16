/* let amount = 'hello';

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount); */

console.log(typeof 6);

let lastName = "WU";
console.log(lastName, typeof lastName);

let age = "32";
console.log(age, typeof age);

// age = parseInt(age);
// age = +age;
age = Number(age);
console.log(age, typeof age);

let price = 700;
console.log(price, typeof price);

// price = price.toString();
price = String(price);
console.log(price, typeof price);

// Change string to deceimal
let rate = "234.6";
console.log(rate, typeof rate);

// rate = parseInt(rate);
rate = parseFloat(rate);
console.log(rate, typeof rate);

let abc = null;
// abc = abc.toString(); // Error
abc = String(abc);
console.log(abc, typeof abc);

let marshal = "John";
marshal = parseInt(marshal);
console.log(marshal, typeof marshal);
console.log(isNaN(marshal));

let xxx = -32;
xxx = Boolean(xxx);
console.log(xxx, typeof xxx);
