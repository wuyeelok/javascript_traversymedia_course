console.log("Random User Mini Project");

const generateBtn = document.getElementById("generate");
const userDiv = document.getElementById("user");
const spinnerDiv = document.querySelector(".spinner");

generateBtn.addEventListener("click", () => {
  spinnerDiv.classList.remove("hidden");
});
