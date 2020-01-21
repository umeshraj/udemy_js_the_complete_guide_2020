// pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// impure function
function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

// impure function changes variables outside
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(previousResult);
addMoreNumbers(1, 2);
console.log(previousResult);

// another e.g. of function that changes array (i.e. via 'reference')
const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("new hobby");
  console.log(h);
}

printHobbies(hobbies);
console.log(hobbies);
