// part 1
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const course1 = new Course("JS Mc", 50, 10);
const course2 = new Course("D3", 12, 89);

console.log(course1);
console.log(course2);
