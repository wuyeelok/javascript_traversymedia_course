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
    if (xhr.status === 200 && xhr.readyState === 4) {
      const jokeObj = JSON.parse(xhr.responseText);
      callBackFunc(jokeObj.value);
    }
  };

  xhr.send();
}

jokeBtn.addEventListener("click", () => {
  generateJoke(showJoke);
});
