/* // IFFE Syntax (Has it's own scope and runs right away)
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('Shawn');

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})();
 */
console.log("Hello");

(function () {
  const user = "Kenneth";
  console.log(user);
})();

(function (name) {
  console.log("Hello " + name);
})("Shawn");

(function (value) {
  console.log(value * 2);
})(14);
