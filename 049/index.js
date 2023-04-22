const express = require("express");
const {
    getAll
} = require("./service");

const app = express();

const port = 5000;

app.get("/", function (req, res) {
    const data = getAll();
    res.send(data)
})

app.post("/", function (req, res) {
    res.send("Hi this is post")
})
app.listen(port, function () {
    console.log(`RUN IN PORT ${port}`);
})