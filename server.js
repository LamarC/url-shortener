//Dependencies
const express = require("express");
const randomChar = require("./utils");
const mongojs = require("mongojs");;

//Express config
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//DB config
let databaseUrl = "long";
const collections = ["url"];

//DB hokked to var
const db = mongojs(databaseUrl, collections);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Shorter url goes here");
});

app.get("/short", (req, res) => {
  res.redirect("Actual URL"); //We don't have one yet
});

app.get("/long", (req, res) => {
  // console.log(req.query);
  // res.end();
  db.url.update({})
});


//Access to public folder
app.use(express.static(__dirname + "/app/public"));

app.listen(3000, () => {
  console.log("App listening 🙌");
});
