const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

app
  .route("/blogs")
  .post((req, res) => {
    const { title, content } = req.body;
    fs.writeFileSync(title, content);
    res.end("ok");
  })
  .put((req, res) => {
    const { title, content } = req.body;

    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end("ok");
    } else {
      res.end("post does not exist");
    }
  });

app
  .route("/blogs/:title")
  .delete((req, res) => {
    const { title } = req.params;
    if (fs.existsSync(title)) {
      fs.unlinkSync(title);
      res.end("ok");
    } else {
      res.end("post does not exist");
    }
  })
  .get((req, res) => {
    const { title } = req.params;

    if (fs.existsSync(title)) {
      res.sendfile(title);
    } else {
      res.end("post does not exist");
    }
  });

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
