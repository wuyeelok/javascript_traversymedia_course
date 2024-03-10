console.log("Random User Mini Project");

const generateBtn = document.getElementById("generate");
const userDiv = document.getElementById("user");
const spinnerDiv = document.querySelector(".spinner");
const bodyEle = document.querySelector("body");
const imgEle = userDiv.querySelector("img");

const api = "https://randomuser.me/api/";

function changeBGColor(gender) {
  bodyEle.classList.remove("bg-purple-800");
  bodyEle.classList.remove("bg-blue-800");

  if (gender === "female") {
    bodyEle.classList.add("bg-purple-800");
  } else if (gender === "male") {
    bodyEle.classList.add("bg-blue-800");
  }
}

function changeUserImg(imgUrl) {
  imgEle.src = imgUrl;
}

generateBtn.addEventListener("click", () => {
  spinnerDiv.classList.remove("hidden");
  fetch(api)
    .then((response) => {
      if (!response.ok || response.status !== 200) {
        throw new Error("Fail to get user!");
      }

      return response.json();
    })
    .then((responseObj) => responseObj.results)
    .then((results) => results[0])
    .then((userObj) => {
      const gender = userObj.gender;
      changeBGColor(gender);

      const imgUrl = userObj.picture.large;
      changeUserImg(imgUrl);
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
