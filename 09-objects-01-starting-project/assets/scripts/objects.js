const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
// also css names can be used
movieList.style["background-color"] = "pink";
movieList.style.display = "block";

let person = {
  name: "Umesh",
  age: 40,
  hobbies: ["tennis", "cooking"],
  greet: function() {
    alert("Hi, there");
  },
  1.5: "hello"
};

// person.greet();

// add a new property
person.isAdmin = true;
console.log(person);

// remove a property
delete person.isAdmin;
console.log(person);

// access key by number
console.log(person[1.5]);

// order of properties
console.log(person);
