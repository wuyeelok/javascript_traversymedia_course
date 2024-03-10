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

function displayRandomUser(userObj) {
  userDiv.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${userObj.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${userObj.name.first} ${userObj.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span>${userObj.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span>${userObj.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span>${userObj.location.city} ${userObj.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span>${userObj.dob.age}</p>
            </div>
          </div>
        </div>
    
    `;
}

function fetchUser() {
  spinnerDiv.classList.remove("hidden");
  fetch(api)
    .then((response) => {
      if (!response.ok || response.status !== 200) {
        throw new Error("Fail to get user!");
      }

      return response.json();
    })
    .then((data) => data.results)
    .then((results) => results[0])
    .then((userObj) => {
      const gender = userObj.gender;
      changeBGColor(gender);

      displayRandomUser(userObj);
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
}

generateBtn.addEventListener("click", () => {
  fetchUser();
});

document.addEventListener("DOMContentLoaded", () => {
  fetchUser();
});
