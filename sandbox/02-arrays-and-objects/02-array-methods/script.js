/* let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array
x = arr.includes(445);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
 */

let v;

const myArr = [3, 5, 1, 6, 7, 9, 16];
console.log(myArr);

myArr.push(10);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(99);
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.reverse();
console.log(myArr);

v = myArr.includes(39);
v = myArr.indexOf(6978);
console.log(v);

let v1;

v1 = myArr.slice(2);
console.log(v1);
console.log(myArr);

v1 = myArr.splice(1, 3);
console.log(v1);
console.log(myArr);

v1 = myArr.splice(0, 2).reverse().toString();
console.log(v1, typeof v1);
console.log(myArr, typeof myArr);
