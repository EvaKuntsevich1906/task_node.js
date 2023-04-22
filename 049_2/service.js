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

function createDate(name, age) {
    const obj = {
        id: arr.length + 1,
        name: name,
        age: age
    }
    arr.push(obj)
    return arr
};

function getByIddate(id) {
    const filtId = arr.filter(el => el.id = id);
    return filtId
}


function updateDateByiD(id, name, age) {
    const obj = {
        id: id,
        name: name,
        age: age
    }
    const filterId = arr.filter(el => el.id != id);
    if (arr.length != filterId.length) {
        filterId.push(obj)
        return filterId
    } else {
        return "Not Found"
    }
}

function deleteData(id) {
    const filterId = arr.filter(el => el.id != id);
    return filterId
}

module.exports = {
    getByIddate,
    createDate,
    updateDateByiD,
    deleteData
}