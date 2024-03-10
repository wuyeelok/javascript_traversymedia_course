console.log("Random User Mini Project");

const generateBtn = document.getElementById("generate");
const userDiv = document.getElementById("user");
const spinnerDiv = document.querySelector(".spinner");

const api = "https://randomuser.me/api/";

generateBtn.addEventListener("click", () => {
  spinnerDiv.classList.remove("hidden");
  fetch(api).finally(() => spinnerDiv.classList.add("hidden"));
});
