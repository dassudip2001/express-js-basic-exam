const express = require("express");
const app = express();
const port = 3000;
console.log(__dirname);
// app.use(express.static(staticPath));
// home page route
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
