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

// // other array methods
// const testResults = [1, 1.3, 5, 8, 1.3, 9, -4];
// const storedResults = testResults.slice();

// testResults.push(91);
// console.log(testResults, storedResults);

// const partResults = testResults.slice(0, 3);
// console.log(partResults);

// const concatResults = testResults.concat([1, 2]);
// console.log(concatResults);

// // index of
// console.log(testResults.indexOf(1.3));
// console.log(testResults.lastIndexOf(1.3));

// // indexOf does not work for objects
// personData = [{ name: "Max" }, { name: "umesh" }];
// console.log(personData.indexOf({ name: "max" }));

// // finding objects in list
// const umesh = personData.find((person, idx, personData) => {
//   return person.name === "umesh";
// });
// console.log(umesh);

// umesh.name = "Anna";
// console.log(personData);

// // findIndex()
// const maxIndex = personData.findIndex((person, index, personData) => {
//   return person.name === "Max";
// });
// console.log(maxIndex, personData[maxIndex]);

// // includes (primitive only)
// console.log(testResults.includes(1.3));

const prices = [10.99, 5.99, 4.9, 1.0];
const tax = 0.19;
const taxAdjustedPrices = [];

// old for loop
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// for each
prices.forEach((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

// map()
const newPrice = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});
console.log(newPrice);

// sort()
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

// filter
const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});
console.log(filteredArray);

// cleaner arrow
const filteredArray2 = prices.filter(price => price > 6);
console.log(filteredArray2);

// reduce
let sum = 0;
prices.forEach(p => {
  sum += p;
});
console.log(sum);

const sumReduce = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
console.log(sumReduce);

// concise arrow fn
const sumReduce2 = prices.reduce(
  (prevValue, curValue) => prevValue + curValue,
  0
);
console.log(sumReduce2);

// split()
const data = "new york; 10.99; 2000";
const transformedData = data.split(";");
console.log(transformedData);

// join()
const nameFragments = ["Umesh", "Rajashekar"];
const name = nameFragments.join(" ");
console.log(name);
