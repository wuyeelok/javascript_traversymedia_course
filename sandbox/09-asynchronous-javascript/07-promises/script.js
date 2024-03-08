/* // Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed..');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
 */
console.log("Promise Intro");

const promise = new Promise((res, rej) => {
  // Some Async task
  setTimeout(() => {
    console.log("Complete");
    res();
  }, 2000);
});

promise.then(() => {
  console.log("Promise consume");
});

const promise2 = new Promise((res, rej) => {
  // Some Async task
  setTimeout(() => {
    console.log("Complete2");
    res();
  }, 2000);
}).then(() => console.log("Prom 2 consumed"));

console.log("Hiii");
