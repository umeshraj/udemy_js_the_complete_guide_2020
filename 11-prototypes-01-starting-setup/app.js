// Modern class

class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Umesh";

  constructor() {
    super();
    this.age = 40;
  }

  greet() {
    console.log(`Hi. I am ${this.name}. I am ${this.age} years old`);
  }
}

// // Old way: constructor functions
// function Person() {
//   this.age = 40;
//   this.name = "Max";
//   this.greet = function() {
//     console.log(`Hi. I am ${this.name}. I am ${this.age} years old`);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// // don't overwrite prototype
// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.log(p.toString());

// console.log(p.__proto__);

// using Person.prototype in an object
const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);
