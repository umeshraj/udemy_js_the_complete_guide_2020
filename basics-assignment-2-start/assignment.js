const task3Element = document.getElementById("task-3");

function alertAuto() {
  alert("Hello World");
}

function alertOne(name) {
  alert(`Hello ${name}`);
}

function combineThree(inp1, inp2, inp3) {
  return inp1 + inp2 + inp3;
}

task3Element.addEventListener("click", alertAuto);
alertOne("Umesh");
alertOne(combineThree("Hello ", "there ", "world"));
