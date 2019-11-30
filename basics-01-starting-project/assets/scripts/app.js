const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const enteredNumber = parseInt(userInput.value);
  const calculationDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
