const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value;
  calculationDescription = "";
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
