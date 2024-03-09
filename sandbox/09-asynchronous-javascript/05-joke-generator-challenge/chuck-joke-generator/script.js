console.log("Begin Challege...");

// DOM Varaible
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const jokeBtn2 = document.getElementById("joke-btn2");
const jokeBtn3 = document.getElementById("joke-btn3");

function showJoke(joke) {
  jokeEl.innerText = joke;
}

function generateJoke(callBackFunc) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
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

function generateJoke2() {
  console.log("generateJoke2");
}

function generateJoke3() {
  console.log("generateJoke3");
}

jokeBtn.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke(showJoke);
});
jokeBtn2.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke2(showJoke);
});
jokeBtn3.addEventListener("click", () => {
  jokeEl.innerText = "Loading...";
  generateJoke3(showJoke);
});

document.addEventListener(
  "DOMContentLoaded",
  () => (jokeEl.innerText = "Press the button below for a random joke")
);
