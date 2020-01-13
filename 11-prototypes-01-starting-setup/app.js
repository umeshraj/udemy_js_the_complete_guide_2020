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

  greet2 = function() {
    console.log("Greet 2 function");
  };
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

// // adding a function to the prototype (instead of for every object)
// function Person() {
//   this.age = 40;
//   this.name = "Max";
// }
// Person.prototype.greet = function() {
//   console.log(`Hi. I am ${this.name}. I am ${this.age} years old`);
// };

// // adding static functions: static
// Person.describe = function() {
//   console.log("Creating person..");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// // don't overwrite prototype
// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);
// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p);
// // console.log(p.__proto__);
// console.log(p.toString());

// const p2 = new p.__proto__.constructor();
// // console.log(p2);

// // Global object
// console.dir(Object);

const p1 = new Person();
const p2 = new Person();
console.log(p1);
console.log(p1.__proto__ === p2.__proto__);
