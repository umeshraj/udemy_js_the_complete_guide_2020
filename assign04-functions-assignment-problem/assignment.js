// // part 1
// const sayHello = name => {
//   console.log("Hi " + name);
// };

// // part 2a{
// const sayHello = (greeting, name) => {
//   console.log(`${greeting} ${name}`);
// };

// // part 2a{
// const sayHello = () => {
//   console.log("Hello, world!");
// };

// part 2c
// const sayHello = name => `Hello ${name}`;

// // part 3
// const sayHello = (name = "umesh") => {
//   console.log(`Hello ${name}`);
// };

// part 4
const checkInput = function(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

// sayHello();
checkInput(
  () => {
    console.log("All not empty");
  },
  "Hello",
  "world",
  "asf"
);
