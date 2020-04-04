const express = require("express");
const axios = require("axios");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("Hello from backend to frontend!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
