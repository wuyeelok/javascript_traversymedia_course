console.log("Array Method Challenges...");

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
