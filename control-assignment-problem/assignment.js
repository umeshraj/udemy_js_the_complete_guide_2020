const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// part 1
if (randomNumber > 0.7) {
  alert(`Number is ${randomNumber}`);
}

// part 2
const myArray = [10, 20, 30, 40];
// for
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// for of
for (const el of myArray) {
  console.log(el);
}

// part 3: backward
for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

// part 4: two rand
const randomNumber2 = Math.random();
const cond1 = randomNumber > 0.7 && randomNumber2 > 0.7;
const cond2 = randomNumber <= 0.2 || randomNumber2 <= 0.2;
if (cond1 || cond2) {
  alert("Part 4");
}
