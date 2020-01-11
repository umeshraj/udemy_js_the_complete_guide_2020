// part 1
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
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
