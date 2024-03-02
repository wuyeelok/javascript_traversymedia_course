/* // Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
 */

const students = ["Tom", "Mary", "June"];

console.log("normal for loop");

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("for of");
for (const s of students) {
  console.log(s);
}

const teachers = [
  { name: "Jane", age: 45 },
  { name: "Kenneth", age: 56 },
];

for (const t of teachers) {
  console.log(t.name);
}

const myMap = new Map();
myMap.set(1, "Orange");
myMap.set(5, "Red");

for (const [k, v] of myMap) {
  console.log(k, v);
}
