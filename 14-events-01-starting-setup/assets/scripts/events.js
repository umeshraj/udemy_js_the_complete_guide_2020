const button = document.querySelector("button");

// // another bad way
// button.onclick = function() {
//   alert("Hello, world!");
// };

// // another bad way
const buttonClickHandler = event => {
  console.log(event);
};
// button.onclick = buttonClickHandler;

const anotherButtonClickHandler = () => {
  console.log("This button was clicked");
};

button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   console.log("Removing event listener");
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);
