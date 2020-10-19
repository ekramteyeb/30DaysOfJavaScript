
const allCountries = require('./countries_data')

//Level 3 Q 1 


//1 



/* for (let index = 0; index < 10; index++) {
    emptySet.add(index)
} */

/* let languagesArray = ['Eng','Eng','Eng', 'Amharic','Arabic','Arabic','Swahili']
let languagesSet = new Set(languagesArray)

for (const value of languagesSet) {
    let occurance = languagesArray.filter(lang => lang === value).length
    console.log(value, occurance)
}
 */
/* for (const value of languagesArray) {
    console.log(value)
}
for (const key in languagesArray) {
    console.log(key,languagesArray[key])
} */
/* const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const copyLanguage = new Set(languages)
for (const iterator of copyLanguage) {
    console.log(iterator)
} */
/* for (const iterator of languages) {
    console.log(iterator)
}
for (const iterator in languages) {
    console.log(iterator,languages[iterator])
} */

// Sets 
//Union of two sets
/* let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set([...A,...B])

console.log(C)
 */
//intersection of two sets

/* let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

//let c = a.filter((num) => B.has(num))
let C = a.filter((num) => B.has(num))
//let C = new Set(c)

console.log(C) */

//Map 

/* let john = {name:'John'}

let visitsCount = {}
let mapVisitCount = new Map()
   mapVisitCount[john] = 123
visitsCount[john] = 123
console.log(visitsCount)
console.log(mapVisitCount)

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
console.log(recipeMap)
console.log(recipeMap.keys()) */

// Object.entries

/* let person = {
    name:'hussen',
    age:23,
    car:'blue'

}
console.log(Object.entries(person))
let personMap = new Map(Object.entries(person))
console.log(Object.entries(person))
console.log(personMap.get('name')) */


//Exercise : level 1 
// Q 6
const a = [4,5,8,9]
const b = [3,4,5,7]
let countries = ['Finland', 'Sweden', 'Norway']
/*
    countries = countries.map(country => [country,country.length])


const countriesMap = new Map(countries) // key: value pairs ['key', 'value']

console.log(countriesMap) */

//Ex .level 2
// Q 1
/* const c = [...a,...b]
const A = new Set(a)
const B = new Set(b)
//Union
const C = new Set(c)
//Intersection
const D = a.filter(el => B.has(el))
console.log(C)
console.log(D)
//Differnce 
const E = a.filter(el => !B.has(el))
console.log(E)
// Q 2  */

//Exercises Level 3
//Q 1 

/* const allLanguages = [] 
allCountries.forEach(country => country.languages.forEach(lang => allLanguages.push(lang) ))

const languagesSet = new Set(allLanguages)
console.log(languagesSet.size) */

//Q 2 

/* function mostSpokenLanguages(countries, num){
    const allLanguages = []
    const pairdLangueges = []
    const mostSpokens = []
    countries.forEach(country => country.languages.forEach(lang => allLanguages.push(lang)))
    const languagesSet = new Set(allLanguages)
    let occurance = 0
    for (const language of languagesSet) {
        occurance = allLanguages.filter(lang => lang === language).length
        pairdLangueges.push({language, occurance})
    }

    for (let index = 0; index < num; index++) {
        let sorted = pairdLangueges.sort(function(a,b){
            if(b.occurance > a.occurance) return 1
            if(b.occurance < a.occurance) return -1
            return 0
        })
        mostSpokens.push(sorted[index])
    }   
    return mostSpokens
}

console.log(mostSpokenLanguages(allCountries,10))

const findMax = (...args) =>  {
    return args.reduce((a,b) => a > b ? a : b)

}
const finMax = (...args) => {
    return Math.max(...args)
}
console.log(finMax(9,3,5,4))

console.log(Math.max(2,3,4,9)) */

