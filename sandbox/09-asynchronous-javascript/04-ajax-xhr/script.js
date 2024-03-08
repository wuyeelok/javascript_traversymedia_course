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

function showMovies(movies) {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${movie.title}</b> Year: ${movie.year}`;
    resulstUL.appendChild(li);
  });
}

function getMyJSONData(cb) {
  noticeDIV.innerText = "Loading Movies...";

  const myXHR = new XMLHttpRequest();
  myXHR.open("GET", "./movies.json");

  myXHR.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      setTimeout(() => {
        console.log("Success getting movies");
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));

        cb(JSON.parse(this.responseText));

        noticeDIV.innerText = "";
      }, 4000);
    }
  };

  myXHR.send();
}

getMyJSONData(showMovies);
