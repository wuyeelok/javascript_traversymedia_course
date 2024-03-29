console.log("Array Method Challenges...");
console.log("Challege 1...");

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

console.log(people);

// My solution
const genYoungPeople = function (arr) {
  const output = [];

  arr
    .filter((p) => p.age <= 25)
    .forEach((p) => {
      const name = `${p.firstName} ${p.lastName}`;
      const email = p.email;

      const youngP = {
        name,
        email,
      };

      output.push(youngP);
    });

  return output;
};

// Brad official solution
const genYoungPeople2 = function (arr) {
  return arr
    .filter((p) => p.age <= 25)
    .map((p) => ({
      name: `${p.firstName} ${p.lastName}`,
      email: p.email,
    }));
};

const youngPeople = genYoungPeople(people);
const youngPeople2 = genYoungPeople2(people);

console.log(youngPeople);
console.log(youngPeople2);

console.log(people);

console.log("Challege 2...");

const numbers = [2, -30, 50, 20, -12, -9, 7];
console.log(numbers);

const addPostiveNum = function (arr) {
  return arr.filter((n) => n > 0).reduce((n1, n2) => n1 + n2, 0);
};
const positiveSum = addPostiveNum(numbers);
console.log(positiveSum);

console.log(numbers);

console.log("Challege 3...");
const words = ["coder", "programmer", "developer"];
console.log(words);

const cap1stLetter = function (wordsArr) {
  return wordsArr.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
};

const capitalizedWords = cap1stLetter(words);
console.log(capitalizedWords);

console.log(words);
