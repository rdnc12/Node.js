const express = require("express");
const axios = require("axios");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", (req, res) => {
  const { cityName } = req.body;
  if (cityName) {
    res.send(cityName);
  } else {
    res.status(404).send("City not found!!!");
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
