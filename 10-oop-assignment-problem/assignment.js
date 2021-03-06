// part 1
class Course {
  #price;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get price() {
    return `$${this.#price}`;
  }

  set price(val) {
    if (val >= 0) {
      this.#price = val;
    } else {
      console.log("Unable to set negative price");
      return;
    }
  }

  lengthToPrice() {
    return this.length / this.price;
  }

  summary() {
    const out = `Course: ${this.title}. Length: ${this.length}. Price: ${
      this.price
    } L2P: ${this.lengthToPrice().toFixed(2)}
    `;
    return out;
  }
}

const course1 = new Course("JS Mc", 50, 10);
const course2 = new Course("D3", 12, 89);

// console.log(course1);
// console.log(course2);

console.log(course1.summary());
console.log(course2.summary());

// part 3

class PracticalCourse extends Course {
  constructor(title, length, price, numEx) {
    super(title, price, length);
    this.numOfExercises = numEx;
  }
}

class TheoreticalCourse extends Course {
  constructor() {
    super();
  }

  publish() {
    console.log("Something..");
  }
}

const pract = new PracticalCourse("ur", 10, 11, 100);
console.log(pract);
const theory = new TheoreticalCourse("ab", 1, 2);
theory.publish();

// Part 4
course1.price = 100;
console.log(course1.price);

course1.price = -10;
console.log(course1.price);

const course3 = new Course("Neg", 10, -10);
console.log(course3);

// try to access private property
course1.#price = 10;