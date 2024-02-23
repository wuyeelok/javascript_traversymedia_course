// challege
console.log("object challege...");
console.log("Step 1");

const library = [
  {
    title: "Romeo and Juilet",
    author: "Shakespere",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Debt, the 1st 5000 Year",
    author: "David Graber",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Triathlon Training Bible",
    author: "Joe Friel",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
console.log(library);

console.log("Step 2");
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

console.log("Step 3");
const { title: firstBook } = library[0];
console.log(firstBook);

console.log("Step 4");
const jStr = JSON.stringify(library);
console.log(jStr, typeof jStr);
