// Value is stored in the stack
const name = "John";
const age = 30;

// Reference is stored in the heap
const person = {
  name: "Brad",
  age: 40,
};
console.table(person);

let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

const name2 = "Kenneth";
const age2 = 32;

let name3 = name2;
// Before change
console.log("name2 value is", name2);
console.log("name3 value is", name3);

name3 = "Tommy";

// After change
console.log("name2 value is", name2);
console.log("name3 value is", name3);

const car = {
  horsePower: 400,
  numOfDoor: 4,
};

const car2 = car;

// Before change
console.log("car value is", car);
console.log("car2 value is", car2);

car.numOfDoor = 2;

// After change
console.log("car value is", car);
console.log("car2 value is", car2);
