/* // const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
 */
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const startConsoleLogBtn = document.getElementById("startConsoleLog");
const stopConsoleLogBtn = document.getElementById("stopConsoleLog");

let myIntervalID;

function printCurrentDatetime(v) {
  const date = Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(Date.now());
  console.log(v, date);
}

function startConsoleLog() {
  if (!myIntervalID) {
    myIntervalID = setInterval(printCurrentDatetime, 2000, `Now is`);
  }
}

function stopConsoleLog() {
  if (myIntervalID) {
    clearInterval(myIntervalID);
    myIntervalID = undefined;
  }
}

startConsoleLogBtn.addEventListener("click", startConsoleLog);

stopConsoleLogBtn.addEventListener("click", stopConsoleLog);

let changeColorIntervalID;

function startChangeBackGroundColor() {
  // console.log(changeColorIntervalID);
  if (!changeColorIntervalID) {
    changeColorIntervalID = setInterval(changeRandomBGColor, 2000);
  }
  // console.log(changeColorIntervalID);
}

function stopChangeBackGroundColor() {
  // console.log(changeColorIntervalID);
  if (changeColorIntervalID) {
    clearInterval(changeColorIntervalID);
    changeColorIntervalID = undefined;
  }
  // console.log(changeColorIntervalID);
}

function changeBackGroundColor() {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

function changeRandomBGColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
  document.body.style.color = `#${randomColor2}`;
}

startBtn.addEventListener("click", startChangeBackGroundColor);
stopBtn.addEventListener("click", stopChangeBackGroundColor);
