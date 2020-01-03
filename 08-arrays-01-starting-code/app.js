const numbers = [1, 2, 3];
console.log(numbers);

// using constructor
const moreNumbers = new Array();
console.log(moreNumbers);

// another way
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// convert iterable to array
const iterArray = Array.from("Umesh");
console.log(iterArray);

// convert nodelist to array
const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);
