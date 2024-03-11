console.log("Typicode Todos Mini-Project");

const api = "https://jsonplaceholder.typicode.com/todos";

const todoList = document.getElementById("todo-list");

function createTodoDiv(todo) {
  const divEle = document.createElement("div");
  divEle.innerText = todo.title;

  if (todo.completed) {
    divEle.classList.add("done");
  }

  return divEle;
}

function showTodo(url, howMany) {
  fetch(`${url}?_limit=${howMany}`)
    .then((resp) => resp.json())
    .then((todos) => {
      todos.forEach((todo) => {
        const div = createTodoDiv(todo);
        todoList.appendChild(div);
      });
    })
    .catch((error) => console.error(error));
}

function init() {
  showTodo(api, 5);
}

init();
