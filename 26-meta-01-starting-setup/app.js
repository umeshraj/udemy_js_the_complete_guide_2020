// library land
const uid = Symbol("uid");
console.log(uid);

const user = {
  [uid]: "p1",
  id: "p1",
  name: "Umesh",
  age: 100,
  [Symbol.toStringTag]: "Umesh Raj"
};

// api land
user.id = "p8";
console.log(user);
console.log(Symbol("uid") === Symbol("uid"));

user[uid] = "p9";
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }

    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false
    };
    this.curEmployee++;
    return returnValue;
  }
};

// // keep calling next
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// calling next with a loop
let employee = company.next();
while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
