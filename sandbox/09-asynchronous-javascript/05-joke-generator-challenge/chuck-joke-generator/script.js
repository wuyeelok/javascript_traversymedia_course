console.log("Begin Challege...");

const randomJokeAPI = "https://api.chucknorris.io/jokes/random";

// DOM Varaible
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const jokeBtn2 = document.getElementById("joke-btn2");
const jokeBtn3 = document.getElementById("joke-btn3");

function showJoke(joke) {
  jokeEl.innerText = joke;
}

function generateJoke(url, callBackFunc) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("error", () => (jokeEl.innerText = "Error!"));

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const jokeObj = JSON.parse(this.responseText);
        callBackFunc(jokeObj.value);
      } else {
        jokeEl.innerText = "Something went wrong...";
      }
    }
  };

  xhr.send();
}

function generateJoke2(url) {
  return new Promise((resovle, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("error", () => {
      reject("Error"); // Never called in this line even if offline??
    });

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          const jokeObj = JSON.parse(this.responseText);
          resovle(jokeObj.value);
        } else {
          reject("Something went wrong...");
        }
      }
    };

    xhr.send();
  });
}

function generateJoke3(url) {
  return fetch(url);
}

jokeBtn.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke(randomJokeAPI, showJoke);
});
jokeBtn2.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke2(randomJokeAPI)
    .then((joke) => showJoke(joke))
    .catch((error) => (jokeEl.innerText = error));
});
jokeBtn3.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke3(randomJokeAPI)
    .then((resp) => {
      if (resp.ok && resp.status === 200) {
        return resp.json();
      } else {
        throw new Error("Fail to get jokes!");
      }
    })
    .then((jokeObj) => jokeObj.value)
    .then((joke) => showJoke(joke))
    .catch((error) => {
      let msg;

      if (error.message.includes("Failed to fetch")) {
        msg = "Error";
      } else {
        msg = error.message;
      }
      jokeEl.innerText = msg;
    });
});

document.addEventListener(
  "DOMContentLoaded",
  () => (jokeEl.innerText = "Press the button below for a random joke")
);
