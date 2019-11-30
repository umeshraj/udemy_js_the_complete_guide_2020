const task3Element = document.getElementById("task-3");

function alertAuto() {
  alert("Hello World");
}

function alertOne(name) {
  alert(`Hello ${name}`);
}

task3Element.addEventListener("click", alertAuto);
alertOne("Umesh");
