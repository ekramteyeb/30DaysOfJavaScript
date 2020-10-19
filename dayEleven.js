//Level one
//
const allCountries = require('./countries_data')

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

// destructuring 
/* let arr = ['toyota','audi','bmw','chevrolet', 'ford']
let [t, a, b,...rest] = arr
console.log(t,a,b)
console.log(rest)

const person = {
    name:'abdu',
    age:23,
    gender:'M'
} */

/* let { name, age, gender, citizen = 'Ethiopian'} = person
console.log(name,age,gender,citizen )
 */
let persons = [
    {
        name: 'abdu',
        age: 23,
        gender: 'M'
    },
    {
        name: 'hussen',
        age: 33,
        gender: 'M'
    },
    {
        name: 'hamzita',
        age: 123,
        gender: 'F'
    }

]

/* for (const {name,age,gender} of persons) {
    console.log(name,age,gender)
}
 */

// spread operator helps to copy things 

/* let arrayNumbers = [1,2,4,5,6]

let arrNumberCopied = [...arrayNumbers]

console.log(arrNumberCopied)

let personCopied = {...person}

console.log(personCopied)

const arrowFunction = (...n) => {

  return n.reduce((a,b) => a + b)
    
}
console.log(arrowFunction(89,23,12,44,55)) */


/* //Q 1
 const [e,pi,gravity,humanBodyTemp,boilingPointTemp] = constants
console.log(gravity)

//Q 3
const {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter)
// */
//Level 2 
//Q 1  */
/* 
 for(const {name,scores,skills,age} of users){
    console.log(name,skills)
} */
 
//Q 2 
 /* for (const { name, scores, skills, age } of users) {
    if(skills.length < 2)
        console.log(name)
}  */

//Level 3 

//Q 1 
 /* for (const {name,capital,population,languages} of allCountries) {
    if(languages.length > 3)
    console.log(name,capital,population,languages)
    
} 
 */
/* //Q 2 
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, [,,jsScore,reactScore]] = student

console.log(`${name} (${skills.length}) [${skills}] ${jsScore} ${reactScore}`)
console.log(skills)

//Q3 
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
    ['Abdu', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
    ['Hussen', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (arr) => {
    let objects = []

    for (const [name,skills,scores] of arr) {
       objects.push ({
            name,
            skills,
            scores
        })
    }
    return objects
}
console.log(convertArrayToObject(students)) */

// Q 4 
/* const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}





const studentCopied = { ...student}

 //console.log(studentCopied)

 const {name,age,skills} = studentCopied
 skills.frontEnd.push({skill:'Bootstrap',level:8})
 skills.backEnd.push({skill:'Express',level:9})
 skills.dataBase.push({skill:'SQL',level:8})
 skills.dataScience.push('SQL')

console.log(studentCopied) */

/* const personObj = {
    name:'abdu',
    age:23,
    gender:'M'
}

const personObjCopied = {...personObj, age:34}

console.log(personObjCopied) */