console.log("Begin Challege...");

// DOM Varaible
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function showJoke(joke) {
  jokeEl.innerText = joke;
}

function generateJoke(callBackFunc) {
  jokeEl.innerText = "Loading...";

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

jokeBtn.addEventListener("click", () => {
  generateJoke(showJoke);
});
