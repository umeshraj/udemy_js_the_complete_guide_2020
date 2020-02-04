const fs = require("fs");

fs.writeFile("user-data.txt", "username=Umesh", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file");
  }
});
