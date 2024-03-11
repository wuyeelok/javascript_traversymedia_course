console.log("Typicode Todos Mini-Project");

const api = "https://jsonplaceholder.typicode.com/todos";

// show 4 todo
function showTodo(url, howMany) {
  fetch(`${url}?_limit=${howMany}`)
    .then((resp) => resp.json())
    .then((todos) => console.log(todos))
    .catch((error) => console.error(error));
}

function init() {
  showTodo(api, 4);
}

init();
