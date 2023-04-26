const express = require("express");
const bodyParser = require("body-parser");
const {
    getAll,
    getById,
    postAll,
    putById,
    deleteById
} = require("./service/service.js")
const app = express();

app.use(bodyParser.json());
const port = 9000;

app.get("/", function (req, res) {
    const send = getAll()
    res.send(send)
});

app.get("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const send = getById(id)
    res.send(send)
});

app.post("/", function (req, res) {
    const {
        label,
        category,
        priority
    } = req.body;
    const send = postAll(label, category, priority);
    res.send(send)
});


app.put("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const {
        label,
        category,
        priority
    } = req.body;
    const send = putById(label, category, priority);
    res.send(send)
});

app.delete("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const send = deleteById(id);
    res.send(send)
});

app.listen(port, () => {
    console.log(`ok in ${9000}`);
});