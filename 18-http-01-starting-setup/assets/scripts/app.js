// add to posts
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// using old XMLHttpRequest
// function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//      xhr.setRequestHeader('Content-Type, 'application/json')

//     xhr.open(method, url);
//     xhr.responseType = "json";

//     // add event listener
//     xhr.onload = function() {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(new Error("Something went wrong"));
//       }
//     };

//     // error handler
//     xhr.onerror = function() {
//       reject(new Error("Failed to send request"));
//       // console.log(xhr.response);
//       // console.log(xhr.status);
//     };

//     xhr.send(JSON.stringify(data));
//   });

//   return promise;
// }

// using then
// function fetchPosts() {
//   sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
//     responseData => {
//       // const listOfPosts = JSON.parse(xhr.response);
//       const listOfPosts = xhr.response; // since we set responseType=json
//       //   console.log(listOfPosts);

//       for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector("h2").textContent = post.title.toUpperCase();
//         postEl.querySelector("p").textContent = post.body;
//         listElement.append(postEl);
//       }
//     }
//   );
// }

// using modern fetch api
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data
    // body: JSON.stringify(data)
    // headers: {
    //   "Content-Type": "application/json"
    // }
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        // error
        return response.json().then(errData => {
          console.log(errData);
          throw new Error("Something went wrong server side");
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error("Something went wrong");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = responseData; // since we set responseType=json

    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  // form data
  const fd = new FormData(form);
  // fd.append("title", title);
  // fd.append("body", content);
  fd.append("userId", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

// get posts on button click
fetchButton.addEventListener("click", fetchPosts);

// post on submit button click
form.addEventListener("submit", event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredConent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredConent);
});

postList.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
