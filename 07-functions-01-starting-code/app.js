const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function() {
  let selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    selection = DEFAULT_USER_CHOICE;
    alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`);
  }
  return selection;
};

startGameBtn.addEventListener("click", function() {
  console.log("Game is starting..");
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
});
