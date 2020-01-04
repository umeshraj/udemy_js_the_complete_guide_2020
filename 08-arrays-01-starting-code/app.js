// const numbers = [1, 2, 3];
// console.log(numbers);

// // using constructor
// const moreNumbers = new Array();
// console.log(moreNumbers);

// // another way
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// // convert iterable to array
// const iterArray = Array.from("Umesh");
// console.log(iterArray);

// // convert nodelist to array
// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// // Adding to arrays

// const hobbies = ["cooking", "tennis"];
// hobbies.push("tv");
// hobbies.unshift("code");
// console.log(hobbies);

// // remove
// hobbies.pop();
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// // splicing
// hobbies.splice(0, 0, "food");
// console.log(hobbies);

// hobbies.splice(1, 0, "cricket");
// console.log(hobbies);

// // deletion
// hobbies.splice(0, 1);
// console.log(hobbies);

// other array methods
const testResults = [1, 1.3, 5, 8, 9, -4];
const storedResults = testResults.slice();

testResults.push(91);
console.log(testResults, storedResults);

const partResults = testResults.slice(0, 3);
console.log(partResults);
