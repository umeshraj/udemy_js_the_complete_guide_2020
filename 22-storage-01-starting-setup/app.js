const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  document.cookie = `uid=${userId}`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map(i => i.trim());
  //   console.log(data);
  console.log(data[1].split("=")[1]);
});
