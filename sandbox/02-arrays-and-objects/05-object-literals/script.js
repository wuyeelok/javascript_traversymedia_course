/* let x;

// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
 */

const dog = {
  name: "Fido",
  age: 5,
  skin_color: "Brown",
  sounds: ["woo", "fuuu"],
};

console.log(dog, typeof dog);
console.log(dog.name);
console.log(dog["age"]);
console.log(dog.sounds[1]);
dog.age = 9;
console.log(dog.age);

dog.hasChildren = false;
delete dog.skin_color;
console.log(dog);

dog.greet = function () {
  for (let i = 0; i < this.sounds.length; i++) {
    console.log(this.sounds[i]);
  }
};

dog.greet();
console.log(dog);
