/* // Default Params
function registerUser(user = 'Bot') {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */
console.log("sdfs");

function greetUser(user = { name: "Bot" }) {
  return `Hello ${user.name}!`;
}

const u1 = {
  name: "Brad",
};

console.log(greetUser());
console.log(greetUser(u1));

// Rest Parms
function product(...nums) {
  let total = 1;
  for (const i of nums) {
    total *= i;
  }
  return total;
}

console.log(product(4, 5, 6));

// Random number form an array
const myArr = [5, 1, 3, 9, 23, 46];

function randomPick(arr) {
  const length = arr.length;
  const pickedIndex = Math.floor(Math.random() * length);
  console.log(`length ${length}, pickedIndex: ${pickedIndex}`);
  return arr[pickedIndex];
}

console.log(randomPick(myArr));
