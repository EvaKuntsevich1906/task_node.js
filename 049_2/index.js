const express = require("express");
const bodyParser = require("body-parser");

const {
    getByIddate,
    createDate,
    updateDateByiD,
    deleteData
} = require("./service")


const app = express();

app.use(bodyParser.json())
const port = 7000;

app.get("/", function (req, res) {
    res.send("GET")
});


app.post("/", function (req, res) {
    const {
        name,
        age
    } = req.body;
    const send = createDate(name, age);
    res.send(send)
});


app.put("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const send = updateDateByiD(id)
    res.send(send)

});


app.delete("/:id", function (req, res) {
    const {
        id
    } = req.params;
    const send = deleteData(id)
    res.send(send)
});

app.listen(port, function () {
    console.log(`Server RUN, port ${port}`);
})