// String
const firstName = "Sara";

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: "Brad",
};
console.log(typeof person);

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
console.log("typeof null", typeof null);
//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3

const middleName = "von";
console.log(typeof middleName);

// Both float and integer are number type
const amount = 6.33;
const numOfPeople = 4;
console.log(typeof amount, typeof numOfPeople);

console.log(typeof true);

console.log(typeof undefined);

// String
const outoutput = "sara";
console.log(outoutput, typeof outoutput);

let unknown;
console.log(unknown, typeof unknown);

// Symbol
const myId = Symbol("GGGG");
console.log(myId, typeof myId);

// BigInt
const reallyBigNumber = -232432425298324n;
console.log(reallyBigNumber, typeof reallyBigNumber);
