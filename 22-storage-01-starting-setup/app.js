const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function(event) {
    const producStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    producStore.add({
      id: "p1",
      title: "A first product",
      price: 10.12,
      tags: ["expensive", "luxury"]
    });
  };
};
dbRequest.onerror = function(event) {
  console.log("Database ERROR!");
};

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
});

retrBtn.addEventListener("click", () => {});
