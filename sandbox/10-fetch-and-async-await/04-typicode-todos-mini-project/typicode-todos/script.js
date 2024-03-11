console.log("Typicode Todos Mini-Project");

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const todoList = document.getElementById("todo-list");

function createTodoDiv(todo) {
  const divEle = document.createElement("div");
  divEle.innerText = todo.title;
  divEle.setAttribute("data-id", todo.id);

  if (todo.completed) {
    divEle.classList.add("done");
  }

  return divEle;
}

function addTodoToDOM(todo) {
  const div = createTodoDiv(todo);
  todoList.appendChild(div);
}

function getTodos(url, howMany) {
  fetch(`${url}?_limit=${howMany}`)
    .then((resp) => resp.json())
    .then((todos) => {
      todos.forEach((todo) => addTodoToDOM(todo));
    })
    .catch((error) => console.error(error));
}

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    getTodos(apiUrl, 5);
  });
}

init();
