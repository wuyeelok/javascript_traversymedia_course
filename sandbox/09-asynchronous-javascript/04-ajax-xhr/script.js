/* const xhr = new XMLHttpRequest();

// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

// Send request
xhr.send();
 */
const noticeDIV = document.getElementById("notice");
const resulstUL = document.getElementById("results");
const refreshBtn = document.querySelector("button");

function showMovies(movies) {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${movie.Title}</b> Year: ${movie.Year}`;
    resulstUL.appendChild(li);
  });
}

function removeMovies() {
  while (resulstUL.firstElementChild) {
    resulstUL.removeChild(resulstUL.firstElementChild);
  }
}

function randomYear(currentYear) {
  const adjust = Math.floor(Math.random() * 50);
  return currentYear - adjust;
}

function getMyJSONData(cb) {
  noticeDIV.innerText = `Loading Random "Fight" title Movies...`;

  const myXHR = new XMLHttpRequest();
  myXHR.open(
    "GET",
    `http://www.omdbapi.com/?s=fight&y=${randomYear(2024)}&apikey=f1ed35f`
  );

  myXHR.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      setTimeout(() => {
        console.log("Success getting movies");
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));

        cb(JSON.parse(this.responseText).Search);

        noticeDIV.innerText = "";
      }, 4000);
    }
  };

  myXHR.send();
}

refreshBtn.addEventListener("click", () => {
  removeMovies();
  getMyJSONData(showMovies);
});

getMyJSONData(showMovies);
