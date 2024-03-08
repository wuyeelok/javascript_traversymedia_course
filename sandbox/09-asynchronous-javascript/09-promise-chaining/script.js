/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log('This will run no matter what', x));
 */
console.log("Promise chain");

const myProm = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      res({ goal: "WinRace", deadline: "30/10/2024" });
    } else {
      rej("Error: something was wrong");
    }
  }, 2000);
});

myProm
  .then((target) => {
    console.log(`Goal: ${target.goal}, deadline: ${target.deadline}`);
  })
  .catch((err) => console.log(err));
