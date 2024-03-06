/* // setTimeout - takes in a callback and a time to wait until that callback is executed

setTimeout(function () {
  console.log('Hello from callback');
}, 2000);

// Named function
setTimeout(changeText, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// clearTimeout() will clear a timer
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});
 */

// Say Hello after 4 seconds
setTimeout(function () {
  console.log("Hello");
}, 4000);

function changeH1Text() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Go Go Go From Callback";
}

// Call changeH1Text function after 3
const timerId = setTimeout(changeH1Text, 3000);

const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Cancelled the Timer");
});

console.log("Good Morning!");
