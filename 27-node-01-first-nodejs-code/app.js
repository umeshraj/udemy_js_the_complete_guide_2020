const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// body parsing with express
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  let userName = req.body.username || "Unknown user";
  console.log(userName);
  res.send(
    `<h1>Hi ${userName}</h1><form method='POST' action='/'><input name='username' type='text'><button type='submit'>Send</button></form>`
  );
});

app.listen(3000);
