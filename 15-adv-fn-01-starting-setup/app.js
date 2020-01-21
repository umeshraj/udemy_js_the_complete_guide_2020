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

// Factory functions
function calculateTax(amount, tax) {
  return amount * tax;
}

const vatAmount = calculateTax(100, 0.19);
const incomeTax = calculateTax(100, 0.25);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// closure in practice
let userName = "Umesh";
function greetUser() {
  //   let name = userName;
  let name = "Anna";
  console.log("Hi " + name);
}

let name = "Umesh Rajashekar";
userName = "max";
greetUser();

// Recursion
function powerOfReg(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(powerOfReg(2, 3));

function powerOf(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powerOf(x, n - 1);
  }
}
console.log(powerOf(2, 4));

// More examples of recursion
const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        { name: "Chris", friends: [{ name: "Hari" }, { name: "Amelia" }] }
      ]
    },
    {
      name: "Julia"
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}
console.log(getFriendNames(myself));
