const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting..");
}

// direct call
// startGame();

// indirect call
startGameBtn.addEventListener("click", startGame);

// // objects can have functions (aka methods)
// const person = {
//   name: "Umesh",
//   greet: function greet() {
//     console.log("Hello, there");
//   }
// };
// person.greet();
