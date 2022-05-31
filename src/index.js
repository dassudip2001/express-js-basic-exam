// how to add static file
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
// static file add
// console.log(__dirname);
//
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// home route

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// about page route
app.get("/about", (req, res) => {
  res.send("hello about");
});
// port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
