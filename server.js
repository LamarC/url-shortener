const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Shorter url goes here");
});

app.listen(PORT, () => {
    console.log("App listening on Port: " + PORT);
});