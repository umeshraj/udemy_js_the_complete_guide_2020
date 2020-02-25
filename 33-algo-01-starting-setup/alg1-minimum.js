function getMinimum(numbers) {
  if (!numbers.length) {
    throw new Error("Cannot be empty array");
  }

  let currentMinimum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error("Cannot be empty array");
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];
      if (outerElement > innerElement) {
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

const testNumbers = [3, 1, 2, 0];
const myMin = getMin2(testNumbers);
console.log(myMin);
