function isEvenOrOdd(number) {
  const result = number % 2;
  if (result == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(11));
