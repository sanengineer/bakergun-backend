const express = require("express");
const app = express();
const port = 3003;
var path = require("path");

// Static Files
app.use(express.static("Public"));

// Setup Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});

// Listen Port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
