// Modern class
// class Person {
//   name = "Umesh";

//   constructor() {
//     this.age = 40;
//   }

//   greet() {
//     console.log(`Hi. I am ${this.name}. I am ${this.age} years old`);
//   }
// }

// Old way: constructor functions
function Person() {
  this.age = 40;
  this.name = "Max";
  this.greet = function() {
    console.log(`Hi. I am ${this.name}. I am ${this.age} years old`);
  };
}

const person = new Person();
person.greet();
