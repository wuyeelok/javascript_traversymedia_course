function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          // resolve(JSON.parse(this.responseText));
          let myData;
          try {
            myData = JSON.parse(this.responseText);
            resolve(myData);
          } catch (e) {
            reject("Something went wrong with the JSON");
          }
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const myMoviePromise = getData("../../../movies.json");
const myActorPromise = getData("../../../actors.json");
const myDirectorPromise = getData("../../../directors.json");

const dummyProm = new Promise((res, rej) => {
  setTimeout(() => {
    res("Ha Ha Ha");
  }, 2000);
});

Promise.all([myMoviePromise, myActorPromise, myDirectorPromise, dummyProm])
  .then((data) => {
    console.log("AAA", data);
  })
  .catch((error) => console.log(error));
