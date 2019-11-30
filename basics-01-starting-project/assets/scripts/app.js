const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calculationDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
