let person = {
  name: "Umesh",
  age: 40,
  hobbies: ["tennis", "cooking"],
  greet: function() {
    alert("Hi, there");
  }
};

// person.greet();

// add a new property
person.isAdmin = true;
console.log(person);

// remove a property
delete person.isAdmin;
console.log(person);
