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

console.log("promise vs callback hell");

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
  .catch((err) => console.error(err));
