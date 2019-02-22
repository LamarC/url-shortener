//Dependencies
const express = require("express");

//Express config
const app = express();

app.get("/", (req, res) => {
  res.send("Shorter url goes here");
});

//Access to public folder
app.use(express.static(__dirname + "/app/public"));

app.listen(3000, () => {
  console.log("App listening 🙌");
});
