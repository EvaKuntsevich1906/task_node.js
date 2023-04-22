const arr = [{
        "id": 1,
        "name": "Yesenia",
        "age": 22
    },
    {
        "id": 2,
        "name": "Hanna",
        "age": 22
    },
    {
        "id": 3,
        "name": "Stanislau",
        "age": 25
    },
    {
        "id": 4,
        "name": "German",
        "age": 18
    },
    {
        "id": 5,
        "name": "Maria",
        "age": 27
    }
];

function getAll() {
    return arr
};


function getByiD(id) {
   const arrFilt =  arr.filter(el => el.id == id); 
   return arrFilt
}

function createData (name, age) {
    arr.push({name: name, age: age}); 
    return arr;
}
module.exports = {
    getAll, 
    getByiD, 
    createData
}; 


