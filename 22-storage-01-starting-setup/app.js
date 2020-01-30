const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;
const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;
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

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

storeBtn.addEventListener("click", () => {
  const producStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  producStore.add({
    id: "p2",
    title: "A second product",
    price: 20.12,
    tags: ["cheap", "luxury"]
  });
});

retrBtn.addEventListener("click", () => {
  const producStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = producStore.get("p2");

  request.onsuccess = function() {
    console.log(request.result);
  };
});
