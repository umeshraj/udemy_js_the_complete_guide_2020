// const ids = new Set([10, 20, 30]);
const ids = new Set(["Hi", "from", "set"]);
console.log(ids);

// check if set has element
console.log(ids.has(2));

// show all entries
for (const entry of ids.entries()) {
  console.log(entry);
}

// add/delete
ids.add(2);
ids.delete("Hi");
console.log(ids);
