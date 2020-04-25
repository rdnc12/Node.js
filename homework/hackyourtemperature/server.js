const express = require("express");
const axios = require("axios");
const exphbs = require("express-handlebars");
const API_KEY = require("./sources/keys.json").API_KEY;

const app = express();

const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  try {
    const { cityName } = req.body;
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}&units=metric`;
    const getResponse = await axios.get(url);

    res.render("index", {
      weatherText: `${cityName}: ${getResponse.data.main.temp}`,
    });
  } catch (err) {
    res.render("index", { weatherText: "City is not found!!!" });
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
