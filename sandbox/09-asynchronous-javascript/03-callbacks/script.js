/* // function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
 */

// DOM Variable
const clickMeBtn = document.querySelector("button");

function myToggle(e) {
  e.target.classList.toggle("danger");
}

clickMeBtn.addEventListener("click", myToggle);

const myPosts = [
  { title: "Post 1", body: "This is Post 1" },
  { title: "Post 2", body: "This is Post 2" },
  { title: "Post 3", body: "This is Post 3" },
];

function createPost(post, cb) {
  setTimeout(() => {
    myPosts.push(post);
    cb();
  }, 3000);
}

function getPosts() {
  setTimeout(() => {
    myPosts.forEach((post) => {
      const myDiv = document.getElementById("posts");
      const myP = document.createElement("div");

      myP.innerHTML = `<b>${post.title}</b> - ${post.body}`;
      myDiv.appendChild(myP);
    });
  }, 2000);
}

createPost({ title: "Post 7", body: "777" }, getPosts);
