console.log("Challege 1...");

/* function getCel(f) {
  return ((f - 32) * 5) / 9;
}
console.log(getCel(100)); */

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(
  `The tempare of 100\xB0F is equal to  ${getCelsius(100).toFixed(2)} \xB0C`
);

console.log("Challege 2...");

const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});
console.log(minMax([1, 2, 3, 4, 5, 6]));

console.log("Challege 3 ...");

(function (l, w) {
  console.log(
    `The area of a rectangle with a length of ${l} and a width of ${w} is ${
      l * w
    }.`
  );
})(10, 5);
