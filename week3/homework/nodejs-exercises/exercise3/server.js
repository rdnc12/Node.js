const fetch = require("node-fetch");

const url = "https://reservation100-sandbox.mxapps.io/api/reservations";
const body = {
  name: "Erdinc",
  numberOfPeople: 400000,
};
const options = {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" },
};

fetch(url, options)
  .then((res) => {
    if (res.ok) {
      return res.text();
    } else throw new Error();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
