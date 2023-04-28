const arr = [{
    "id": "javascript",
    "label": "JavaScript",
    "category": "programmingLanguages",
    "priority": 1
},
{
    "id": "typescript",
    "label": "TypeScript",
    "category": "programmingLanguages",
    "priority": 1
},
{
    "id": "sql",
    "label": "SQL",
    "category": "programmingLanguages",
    "priority": 2
},
{
    "id": "java",
    "label": "Java",
    "category": "programmingLanguages",
    "priority": 3
},
{
    "id": "go",
    "label": "GO",
    "category": "programmingLanguages",
    "priority": 3
},
{
    "id": "firebasestorage",
    "label": "Firebase Storage",
    "category": "databases",
    "priority": 2
},
{
    "id": "ibmcloudant",
    "label": "IBM Cloudant",
    "category": "databases",
    "priority": 2
},
{
    "id": "react",
    "label": "React",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "angularjs",
    "label": "ANGULARJS",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "redux",
    "label": "Redux",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "materialui",
    "label": "Material UI",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "git",
    "label": "Git",
    "category": "otherSkills",
    "priority": 2
},
{
    "id": "adobephotoshop",
    "label": "Adobe Photoshop",
    "category": "otherSkills",
    "priority": 2
}
];


function getAll() {
return arr
};


function getById(id) {
const filterarr = arr.filter(el => el.id == id);
return filterarr
};


function postAll(label, category, priority) {
const obj = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    };

    arr.push(obj)
return arr
};

function putById(id, label, category, priority) {
const obj = {
    id: id,
    label: label,
    category: category,
    priority: priority
};
const filterarr = arr.filter(el => el.id != id);
return filterarr
}

function deleteById(id) {
const filterarr = arr.filter(el => el.id != id);
return filterarr
}



module.exports = {
getAll,
getById,
postAll, 
putById, 
deleteById
}