const fetch = require('node-fetch');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
  headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' },
})
  .then(res => res.json())
  .then(json => console.log(json));