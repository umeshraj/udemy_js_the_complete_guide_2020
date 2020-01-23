const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);

// // Single threading in JS blocks code execution
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);
