/* function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
 */
console.log("Call back hell!!!");

function getMyData(endpointURL, cb) {
  const myXHR = new XMLHttpRequest();

  myXHR.open("GET", endpointURL);

  myXHR.addEventListener("error", () => console.log("Error while getMyData"));

  myXHR.onreadystatechange = () => {
    if (myXHR.readyState === 4 && myXHR.status === 200) {
      cb(JSON.parse(myXHR.responseText));
    }
  };
  setTimeout(() => {
    myXHR.send();
  }, Math.floor(Math.random() * 3000) + 100);
}

// Callback hell when try to gurantee the order of getMyData
/* getMyData("./movies.json", (data) => {
  console.log(data);
  getMyData("./actors.json", (data) => {
    console.log(data);
    getMyData("./directors.json", (data) => console.log(data));
  });
}); */

function getMyDataPromise(endpointURL) {
  return new Promise((resolve, reject) => {
    const myXHR = new XMLHttpRequest();

    myXHR.open("GET", endpointURL);

    myXHR.addEventListener("error", () => console.log("Error while getMyData"));

    myXHR.onreadystatechange = () => {
      if (myXHR.readyState === 4 && myXHR.status === 200) {
        const resp = JSON.parse(myXHR.responseText);
        resolve(resp);
      }
    };
    setTimeout(() => {
      myXHR.send();
    }, Math.floor(Math.random() * 3000) + 100);
  });
}

// Try to refactor call backhell to Promise hell??
getMyDataPromise("./movies.json")
  .then((data) => {
    console.log("Movie", data);
    getMyDataPromise("./actors.json")
      .then((data) => {
        console.log("Actor", data);
        getMyDataPromise("./directors.json")
          .then((data) => console.log("Director", data))
          .finally(() => console.log("Finish Director"));
      })
      .finally(() => console.log("Finish Actor"));
  })
  .finally(() => console.log("Finish Movie"));
