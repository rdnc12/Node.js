const Handlebars = require("handlebars");

const randomElement = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];
const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];

const randomData = {
  subject: randomElement(subjects),
  punchline: randomElement(punchlines),
};
const source = `{{subject}} is great to {{punchline}}`;
const phrase = Handlebars.compile(source);
const result = phrase(randomData);

console.log(result);
