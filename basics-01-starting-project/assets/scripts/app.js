const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calculationDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
