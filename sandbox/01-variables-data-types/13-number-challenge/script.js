// Number Challenge
console.log("Number Challenge");

let x;
let y;

// Random number between 1 to 100
x = Math.floor(Math.random() * 100 + 1);
console.log(`Random number between 1 to 100: ${x}!`);

// Random number between 1 to 50
y = Math.floor(Math.random() * 50 + 1);
console.log(`Random number between 1 to 50: ${y}!`);

const sumOutput = x + y;
console.log(`Sum of ${x} and ${y}: ${sumOutput}`);

const differenceOutput = x - y;
console.log(`Difference of ${x} and ${y}: ${differenceOutput}`);

const productOutput = x * y;
console.log(`Product of ${x} and ${y}: ${productOutput}`);

const rmOutput = x % y;
console.log(`Remainder of ${x} and ${y}: ${rmOutput}`);
