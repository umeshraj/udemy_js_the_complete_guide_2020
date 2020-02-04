const fs = require("fs");

// reading from file
fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data.toString());
  }
});

// writing to file
fs.writeFile("user-data.txt", "username=Umesh", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file");
  }
});
