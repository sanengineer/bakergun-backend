const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 8008;
// var path = require("path");

// Static Files
app.use(express.static("Public"));

// Setup Views
app.set("views", "./views");
app.set("view engine", "ejs");

// Morgan Oei
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./Routes/api"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
  // res.json({ message: "Hello San" });
});

app.get("/game", (req, res) => {
  res.render("game");
});

app.get("/players", (req, res) => {
  res.render("players");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Listen Port
app.listen(port, () => {
  console.log(`bakergun-backend running on http://localhost:${port}`);
});
// app.listen("3003");
