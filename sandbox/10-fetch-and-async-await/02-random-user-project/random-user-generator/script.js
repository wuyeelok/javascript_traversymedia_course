console.log("Random User Mini Project");

const generateBtn = document.getElementById("generate");
const userDiv = document.getElementById("user");
const spinnerDiv = document.querySelector(".spinner");

const api = "https://randomuser.me/api/";

generateBtn.addEventListener("click", () => {
  spinnerDiv.classList.remove("hidden");
  fetch(api)
    .then((response) => {
      if (!response.ok || response.status !== 200) {
        throw new Error("Fail to get user!");
      }
    })
    .catch((error) => {
      let msg;

      if (error.message.includes("Failed to fetch")) {
        msg = "Error";
      } else {
        msg = error.message;
      }
      userDiv.innerText = msg;
    })
    .finally(() => spinnerDiv.classList.add("hidden"));
});
