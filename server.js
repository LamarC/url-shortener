//Dependencies
const express = require("express");

//Express config
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Shorter url goes here");
});

app.get("/short", (req, res) => {
  res.redirect("Actual URL"); //We don't have one yet
});

//Access to public folder
app.use(express.static(__dirname + "/app/public"));

app.listen(3000, () => {
  console.log("App listening 🙌");
});
