//Dependencies
const express = require("express");
const randomChar = require("./utils");
const mongojs = require("mongojs");
const env = require("dotenv");

//Env var
env.config();

//Express config
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//DB config
let databaseUrl = process.env.MONGODB_URI;
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
  console.log(req.query);
 
  //generate a random string
  //create an object with {long: "longurl here", short:"random string"}
  db.url.insert({
    long: req.query.longUrl,
    short: randomChar(),
  })

  res.send("save URL");

});


//Access to public folder
app.use(express.static(__dirname + "/app/public"));

app.listen(3000, () => {
  console.log("App listening 🙌");
});
