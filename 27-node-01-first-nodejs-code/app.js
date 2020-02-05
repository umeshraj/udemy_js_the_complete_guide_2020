const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// using the ejs templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// body parsing with express
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  let userName = req.body.username || "Unknown user";
  res.render("index", {
    user: userName
  });
});

app.listen(3000);
