const express = require("express");
const {getByIddate} = require("./service")

const app = express();

const port = 8000;

app.get("/", function(req, res) {
res.send()
});

app.post("/", function(req, res) {
    res.send()
});
app.put("/", function(req, res) {
    res.send()
});
app.delete("/", function(req, res) {
    res.send()
});

app.listen(port, function () {
    console.log(`Server RUN, port ${port}`);
})