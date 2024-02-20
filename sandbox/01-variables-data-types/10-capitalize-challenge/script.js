console.log("10 Capitalize Challege Begins...");

// Capitalize the 1st letter of a string
const myString = "devleoper";
console.log(`Original String: ${myString}`);

const solution1 = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(`Cap 1st letter solution 1: ${solution1}`);

const solution2 = myString[0].toUpperCase() + myString.substring(1);
console.log(`Cap 1st letter solution 2: ${solution2}`);

const solution3 = `${myString.slice(0, 1).toUpperCase()}${myString.slice(1)}`;
console.log(`Cap 1st letter solution 3: ${solution3}`);

const solution4 = `${myString
  .slice(-myString.length, -myString.length + 1)
  .toUpperCase()}${myString.slice(-myString.length + 1)}`;
console.log(`Cap 1st letter solution 4: ${solution4}`);
