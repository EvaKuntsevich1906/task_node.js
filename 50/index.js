const express = require("express"); 
const bodyParser = require("body-parser");
const {
    getAll, 
    getById
} = require("./service/service.js")
const app = express(); 

app.use(bodyParser.json());
const port = 9000; 

app.get("/", function(req,res) {
    const send = getAll(id)
    res.send(send)
}); 

app.get("/:id", function(req,res) {
    const {id} = req.params;
    const send = getById(id)
    res.send(send)
}); 

app.listen(port, () => {
    console.log(`ok in ${9000}`);
});
