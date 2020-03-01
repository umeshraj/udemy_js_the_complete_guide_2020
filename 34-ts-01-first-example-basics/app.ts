// class User {
//   public name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string) {
    super(name, age);
  }
}

const user = new User("Umesh", 23);
console.log(user.name);
// console.log(user.age);

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = "console" | "alert";
enum OutputMode {
  CONSOLE,
  ALERT
}
function printResult(result: any, printMode: OutputMode): void {
  if (printMode == OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode == OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// console.log(result);
interface CalculationContainer {
  res: number;
  print(): void;
}
type CalculationResults = CalculationContainer[];

// type CalculationResults = { res: number; print: () => void };

// const results: CalculationResults[] = [];
const results: Array<CalculationContainer> = [];

buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer: { res: number; print: () => void } = {
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);
  // results.push(5);
  // printResult(results);
  // results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>("Hello there").split(" ");
