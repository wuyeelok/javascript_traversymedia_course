/* let x;

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

// Get array of object keys
x = Object.keys(todo);

// Get length of an object
x = Object.keys(todo).length;

// Get array of object values
x = Object.values(todo);

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty('age');

console.log(x);
 */
const todo = {};
todo.id = 44;
console.log(todo);

const killer = {
  ablities: {
    scream: 23,
    fast_chase: 45,
  },
  hp: 100,
};

console.log(killer);

const obj1 = { name: "Kenneth", age: 32 };
const obj2 = { sex: "Male" };
// Spread operatior
const me = { ...obj1, ...obj2 };
console.log(me);

const myKey = Object.keys(me);
console.log(myKey, typeof myKey);

const myValue = Object.values(me);
console.log(myValue, typeof myValue);

const myEntry = Object.entries(me);
console.log(myEntry, typeof myEntry);
