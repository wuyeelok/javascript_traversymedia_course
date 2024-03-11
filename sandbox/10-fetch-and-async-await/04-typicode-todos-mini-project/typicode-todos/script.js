console.log("Typicode Todos Mini-Project");

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

function deleteTodo(e) {
  const todoId = e.target.dataset.id;
  console.log(todoId);

  fetch(`${apiUrl}/${todoId}`, {
    method: "DELETE",
  })
    .then((res) => {
      e.target.remove();
    })
    .catch((err) => console.error(err));
}

function toggleCompleted(e) {
  const todoEle = e.target;
  const id = e.target.dataset.id;
  const title = e.target.innerText;

  let completed;
  if (todoEle.classList.contains("done")) {
    completed = false;
  } else {
    completed = true;
  }

  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      completed,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      todoEle.classList.toggle("done");
    })
    .catch((err) => console.error(err));
}

function createTodoDiv(todo) {
  const divEle = document.createElement("div");
  divEle.innerText = todo.title;
  divEle.setAttribute("data-id", todo.id);

  if (todo.completed) {
    divEle.classList.add("done");
  }

  divEle.addEventListener("dblclick", deleteTodo);
  divEle.addEventListener("click", toggleCompleted);

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

function createTodo(e) {
  e.preventDefault();

  const newTodo = document.getElementById("title").value;

  if (!newTodo.trim()) {
    alert("Please input todo");
    return;
  }

  const addBtn = e.target.querySelector("button");
  addBtn.innerText = "Loading...";
  addBtn.disabled = true;

  fetch(`${apiUrl}`, {
    method: "POST",
    body: JSON.stringify({
      title: newTodo.trim(),
      completed: false,
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((todo) => {
      addTodoToDOM(todo);
      document.getElementById("title").value = "";
    })
    .catch((error) => console.error(error))
    .finally(() => {
      addBtn.innerText = "Add";
      addBtn.disabled = false;
    });
}

function init() {
  document.addEventListener("DOMContentLoaded", () => {
    getTodos(apiUrl, 5);
  });
  todoForm.addEventListener("submit", createTodo);
}

init();
