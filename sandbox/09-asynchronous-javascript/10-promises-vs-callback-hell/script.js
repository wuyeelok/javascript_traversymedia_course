function getMyDataProm(endpointURL) {
  return new Promise((resolve, reject) => {
    const myXHR = new XMLHttpRequest();

    myXHR.open("GET", endpointURL);

    myXHR.addEventListener("error", () => {
      reject("Something is terribly wrong!");
    });

    myXHR.onreadystatechange = () => {
      if (myXHR.readyState === 4) {
        if (myXHR.status === 200) {
          let myData;

          try {
            myData = JSON.parse(myXHR.responseText);
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
      myXHR.send();
    }, Math.floor(Math.random() * 3000) + 100);
  });
}

function randomWait() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, Math.floor(Math.random() * 3000) + 100);
  });
}

async function getMyDataProm3(endpointURL) {
  try {
    const waiting = await randomWait();
    const resp = await fetch(endpointURL);
    if (!resp.ok) {
      throw new Error("Fail to get data");
    }

    const data = await resp.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

/* console.log("Version 1: promise vs callback hell");

getMyDataProm("../../../movies.json")
  .then((data) => {
    console.log("My Movies", data);
    return getMyDataProm("../../../actors.json");
  })
  .then((data) => {
    console.log("My Actors", data);
    return getMyDataProm("../../../directors.json");
  })
  .then((data) => console.log("My Directors", data))
  .catch((err) => console.error(err)); */

async function getAllMyData() {
  const movies = await getMyDataProm("../../../movies.json");
  console.log("My Movies 2", movies);

  const actors = await getMyDataProm("../../../actors.json");
  console.log("My actors 2", actors);

  const directors = await getMyDataProm("../../../directors.json");
  console.log("My directors 2", directors);
}

// getAllMyData();

async function getAllMyData3() {
  const movies = await getMyDataProm3("../../../movies.json");
  const actors = await getMyDataProm3("../../../actors.json");
  const directors = await getMyDataProm3("../../../directors.json");
  console.log(
    "My movies v3",
    movies,
    "My actors v3",
    actors,
    "My directors v3",
    directors
  );
}

getAllMyData3();

async function getAllUsingPromiseAll() {
  const [mRes, aRes, dRes] = await Promise.all([
    fetch("../../../movies.json"),
    fetch("../../../actors.json"),
    fetch("../../../directors.json"),
  ]);

  const movies = await mRes.json();
  const actors = await aRes.json();
  const directors = await dRes.json();

  console.log(movies, actors, directors);
}

// getAllUsingPromiseAll();

async function getAllUsingPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch("../../../movies.json").then((resp) => resp.json()),
    fetch("../../../actors.json").then((resp) => resp.json()),
    fetch("../../../directors.json").then((resp) => resp.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllUsingPromiseAll2();
