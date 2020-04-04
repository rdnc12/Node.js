var http = require("http");

//create a server
let server = http.createServer((req, res) => {
  if (req.url === "/script.js") {
    res.setHeader("Content-Type", "text/javascript");
    res.write(` document
    .getElementById('content')
    .appendChild(document.createTextNode('Welcome to Server-Land!')); `);
  } else if (req.url === "/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.write(
      ` #content { color: green; font-size: large;border: 4px dotted blue; width: 100px;} `
    );
  } else {
    res.setHeader("Content-Type", "text/html");
    //send a response back to the client
    res.write(` <html>
  <head>
    <title>My First Web Server</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Hello, anyone home?</h1>
    <div id="content"></div>
    <script src="script.js"></script>
  </body>
</html> `);
  }
  //end the response
  res.end();
});
//the server listens on port 3000
server.listen(3000);
