const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "max",
  age: 30,
  hobbies: ["Sports", "Cooking"]
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extracetedId = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extracetedId) {
    console.log("Got the id - " + extracetedId);
  } else {
    console.log("Could not get id");
  }
});
