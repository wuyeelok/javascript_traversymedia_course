/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

// getUsers();

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  throw new Error('Hello');

  console.log(data);
};

getPosts().catch((error) => console.log(error));
 */

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res({ age: 13, sex: "Male", ID: "XXXX" });
  }, 2000);
});

// myPromise.then((data) => console.log(data));

async function getMyPromise() {
  const myResp = await myPromise;
  console.log(myResp);
}

// getMyPromise();

/* async function getRandomJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  const jokeObj = await response.json();
  console.log(jokeObj);

  const joke = jokeObj.value;
  console.log(joke);
  console.log("Ha Ha");
}

getRandomJoke();

console.log("End of js file"); */

const getTodos = async () => {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=4"
  );
  const todos = await resp.json();

  console.log(todos);
};

getTodos();
