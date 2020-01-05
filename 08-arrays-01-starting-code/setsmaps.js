// // const ids = new Set([10, 20, 30]);
// const ids = new Set(["Hi", "from", "set"]);
// console.log(ids);

// // check if set has element
// console.log(ids.has(2));

// // show all entries
// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// // add/delete
// ids.add(2);
// ids.delete("Hi");
// console.log(ids);

// // MAPS
// const person1 = { name: "Umesh" };
// const person2 = { name: "Raj" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
// console.log(personData);

// console.log(personData.get(person1));

// // add a key/value pair
// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
// console.log(personData);

// // show all key/value pairs
// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// // array destructuring with maps
// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// // just see the keys
// console.log("KEYS ONLY");
// for (const key of personData.keys()) {
//   console.log(key);
// }

// // just see the values
// console.log("Just values");
// for (const values of personData.values()) {
//   console.log(values);
// }

// WEAK SETS
let person = { name: "Umesh" };
const persons = new WeakSet();
persons.add(person);

person = null;

console.log(persons);
