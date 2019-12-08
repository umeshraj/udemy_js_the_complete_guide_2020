const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting..");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}. Therefore you `;
  if (winner == RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "won!";
  } else {
    message += "lost";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const sumUp = (...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

console.log(sumUp(1, 2, 3, 4));
console.log(subtractUp(1, 2, 3, 4));
