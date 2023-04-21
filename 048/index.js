const express = require("express");

const app = express();

const port = 3000;

app.get("/", function (req, res) {
    const arr = [1,2,2,3,3,3,6];
    const uniq = [];
    for (let i = 0; i<arr.length; i++){
        if(arr[i]!= arr[i+1] && arr[i] != arr[i-1]) {
            uniq.push(arr[i]);
        }
    }
    res.send(uniq); 
});

app.get("/about", function (req, res) {
    res.send("Hello Node.js about")
})

app.get("/contact", function (req, res) {
    res.send("Hello Node.js contact")
})


app.listen(port, function () {
    console.log(`Server is running in port ${port}`);
});

// На сервере хранится массив из чисел. Необходимо вернуть клиенту только
// уникальные значения