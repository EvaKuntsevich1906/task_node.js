const express = require("express");
const bodyParser = require("body-parser"); 
const {
    getAll, 
    getByiD, 
    createData
} = require("./service");

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.get("/", function (req, res) {
    const data = getAll();
    res.send(data)
}); 

app.get("/:id", function (req, res) {
    const {id} = req.params; 
    const data = getByiD(id);
    res.send(data)
})

app.post("/", function (req, res) {
    const {name, age} = req.body; 
    const sende = createData(name, age)
    res.send(sende)
})
app.listen(port, function () {
    console.log(`RUN IN PORT ${port}`);
})