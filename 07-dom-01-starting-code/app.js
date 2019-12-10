const h1 = document.getElementById("main-title");
h1.textContent = "Some new title";
h1.style.color = "white";
h1.style.backgroundColor = "black";

// selecting last list item
const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(changed)";

// you can access body etc
const body = document.body;
// body.querySelector()

// select multiple
const listItemElements = document.querySelectorAll("li");
for (const listItemEl of listItemElements) {
  console.log(listItemEl);
}
