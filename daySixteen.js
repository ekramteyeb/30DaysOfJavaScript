/* const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
//console.log(usersObj)


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    }
}

const txt = JSON.stringify(users, undefined, 4)
//console.log(txt) // text means JSON- because json is a string form of an object.

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
}

const txtt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(txtt) */


const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercises Level 1 
// Q 1 

let skillJson = JSON.stringify(skills)

//console.log(typeof(skills))
//console.log(typeof(skillJson))

let ageJson = JSON.stringify(age)
//console.log(ageJson)

//Q 3 

const isMarriedJson = JSON.stringify(isMarried)
//console.log(isMarriedJson)


// Level 2
// 1
const studentJson = JSON.stringify(student,['firstName','lastName','skills'], 4)

//console.log(studentJson)

// Level 3
//
/* const textObject = JSON.parse(txt)
const textObjectArray = Object.entries(textObject)

let maxSkills = 0, maxPerson = ''
for (const objectArr of textObjectArray) {
    
    if (objectArr[1].skills.length > maxSkills)
    maxSkills = objectArr[1].skills.length, maxPerson = objectArr[0]
        
}
console.log(maxPerson, maxSkills) */
/* 

function sum(a,b){
    return a + b
}
const sum = (a,b) => {
    return a + b
} */
/* const sum = async function (a) {
    return a + 10
}

const value = await sum(3,4)


const square = async function (n) {
    return n * n
}
const value = await square(2) */

//console.log(textObjectArray[0][0], textObjectArray[0][1].skills.length)

/* const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
    area: function () {
        return this.width * this.height
    }
}
/*
// Level 3 
// q 1 

// 2 


console.log(rectangle)
console.log(typeof rectangle)
const rectangleJson = JSON.stringify(rectangle,['width','height'],4)

console.log(rectangleJson)
console.log(typeof rectangleJson)


const rectangeObj = JSON.parse(rectangleJson)

console.log(rectangeObj) */