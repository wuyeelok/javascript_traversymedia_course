console.log("Fizzbuzz Challenge...");

console.log("Print numbers from 1 to 100...");
console.log('For multiples of three print "Fizz" instead of the number');
console.log('For multiples of five print "Buzz"');
console.log(
  'For numbers which are multiples of both three and five print "FizzBuzz".'
);

for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}

console.log("_____________________________");

let i = 1;
while (i <= 100) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

  i++;
}

console.log("_____________________________");

let j = 1;
do {
  if (j % 15 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }

  j++;
} while (j <= 100);
