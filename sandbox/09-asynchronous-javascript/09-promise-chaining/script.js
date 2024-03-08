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
    return target.goal;
  })
  .then((goal) => {
    console.log("This the goal", goal);
    return goal.length;
  })
  .then((len) => console.log("Length is: " + len))
  .catch((err) => {
    console.log(err);
    return "Code 66";
  })
  .then((code) => console.log(code));

/* function testPromise() {
  setTimeout(() => {
    const po = new Promise(function (resolve, reject) {
      reject("No");
    });

    console.log("ABC");

    po.then((val) => console.log(val))
      .catch((err) => console.error(err))
      .finally(() => {
        console.log("FFFF");
      });
    console.log(po);

    console.log("DEF");
  }, 2000);
}

testPromise(); */
