/* import {countries} from './countries.js'
import {web_techs} from './web_techs.js' */
/* const countries = require('./countries')
const webTechs = require('./web_techs')
 */

/* console.log(countries)
console.log(webTechs)

countries.length % 2 === 0 ? console.log(countries[countries.length / 2 - 1], countries[countries.length / 2]) : countries[Math.floor(countries.length / 2)]
let xj = 0 */
/* do {
    console.log(xj) 
    xj++;
} while (xj < 10) */
/* var numArray = [...Array(100).keys()]

numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

console.log(numArray);
let arr3 = []
for(let i = 0; i < 101; i++){
    if(i === 2 || i === 3 || i === 5 || i === 7) arr3.push(i)
    if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 )
    arr3.push(i)
}
console.log(arr3)


2, 3, 5 , 7  */
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finlandi',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

 /* // Q4 Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let newCountries = countries.map(function(country) {
    return country.toUpperCase();
})
console.log(newCountries) */
 
/* //Q5 Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let countryLengh = countries.map(function (country) {
    return country.length;
})
console.log(countryLengh) */

/* //Q 6 Use the countries array to create the following array of arrays:

let newCountryCode = countries.map(function (country) {
    return [country, country.slice(0,3),country.length];
})
console.log(newCountryCode)
 */

 //Q 7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

/* let landCountries = countries.filter(function (country) {
    
    return country.includes('lanääd');
})

console.log(landCountries.length !== 0  ? landCountries : 'All these countries are without land') */

//Q 8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
/* 
let iaCountries = countries.filter(function (country) {

    return country.substr(-2) === 'ia' 
})
console.log(iaCountries.length !== 0 ? iaCountries : 'These coutries are without ia') */

//9 Using the above countries array, find the country containing the biggest number of characters

/* let biggestCountry = countries.reduce(function (a,b) {
    if (a.length >= b.length) { return a }else{return b}

    
})
console.log(biggestCountry) */
/* 
//Q 10 Using the above countries array, find the country containing only 5 characters.
let fiveCountries = countries.filter(function (country) {

    return country.length === 5;
})

console.log(fiveCountries) */

//Q1 1 Find the longest word in the webTechs array
/* let longWebTech = webTechs.reduce(function (a,b) {

    if (a.length > b.length) { return a } else { return b }
})

console.log(longWebTech) */

//Q 12 Use the webTechs array to create the following array of arrays

/* let newWebTechArray = webTechs.map(function (webtech) {
    return [webtech, webtech.length];
})
console.log(newWebTechArray) */

//Q 13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

/* let acronim = mernStack.map(function(tech){
    return tech.slice(0,1)
})
console.log(acronim.toString().split(',').join('')) */

// Q 14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

/* for(let i = 0 ; i < mernStack.length ; i ++){
    console.log(mernStack[i])
} */
// Q 15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

/* let fruits = ['banana', 'orange', 'mango', 'lemon']

for (let index = fruits.length-1; index >= 0; index--) {
    console.log(fruits[index])
    
} */

// Q 16 Print all the elements of array as shown below.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

/* let stack = fullStack.toString().split(',').forEach(function(a) {
    console.log(a)
}) */

/* let stack = fullStack.toString().split(',')

for (let index = 0; index < stack.length; index++) {
    console.log(stack[index]);
    
} */

//Level 3 
//Q1 Copy countries array(Avoid mutation)
/* let countriesCopy = [...countries]
countries.push('Turkey')
console.log(countries)
console.log(countriesCopy) */

/* //Q2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let countriesCopy = [...countries]
countriesCopy.reverse()
console.log(countries)
console.log(countriesCopy) */

//Q3 - 7 Sort the webTechs array and mernStack array
// do them ,  

//Q8 Extract all the countries containing two or more words from the countries array and print it as array
/* countries.push('South Africa','North Korea')

let filterdCountries = countries.filter(function(country){
    if (country.split(' ').length > 1)
    return country
})
console.log(filterdCountries) */
//Q9 Reverse the countries array and capitalize each country and stored it as an array

/* let sortedReversed = countries.reverse().map(function(country){
    return country.toUpperCase()
})
console.log(sortedReversed) */

//Day 7 
//Level 1 
//Q1 
//Fuction declaration 
/* function fullName(){
    return 'Teyeb Hussen'
}
//calling function 
let name = fullName()

console.log(fullName())
console.log(name) */

// Q2
/* function fullName(fname, lname) {
    return fname + ' ' + lname
}

console.log(fullName('abdu', 'teyeb'))
 */
//Q 3 - 6 do it 
//Q 7 
/* function circumOfCircl(r){
    const pi = Math.PI.toFixed(2)
    return 2 * pi * r
}

console.log(circumOfCircl(3)) */
//Q 8 - 11

//Q 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

/* function convertCelciusToFahrenheit(c){
    return (c * 9/5) + 32
}
console.log(convertCelciusToFahrenheit(0))
 */
// Q 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2

/* function bmi(w,h){
    let bmi = w / (h * h)
    if(bmi < 18.5) return 'Underweight'
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal weight'
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight'
    if(bmi >= 30) return 'Obese'
}
console.log(bmi(73,1.66)) */
// Q 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer

/* function checkSeason(month){
    let autumn = ['September', 'October','November']
    let winter = ['December', 'January','February']
    let spring = ['March', 'April','May']
    let summer = ['June', 'July','August']

    switch(true){
        case autumn.includes(month): 
            return 'Autumn'
            break;
        case winter.includes(month):
            return 'Winter'
            break;
        case spring.includes(month):
            return 'Spring'
            break;
        case summer.includes(month):
            return 'Summer'
            break;
        default:
            return 'Enter a valid month'
    }
}

console.log(checkSeason('September'))
 */
// Q  15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

/* function findMax(a,b,c){
   //let values = Object.values(arguments)
   let values = [a,b,c]
   let max = values[0]

   for(let i = 0; i < values.length; i++){
        if(values[i] > max)
        max = values[i]
   }
   return max 
   
}

console.log(findMax(0, -10, -2)) */


 // Level 1 
 // Q 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
/* 
    function solveLinEquation(a,b,c){
        let x,y 
        x = -c/a 
        y = -c/b
        return [x,y]        
    }
    console.log(solveLinEquation(-2,3,0)) */

// Q2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

/* function solveQuadEquation(a,b,c){
    let x1 , x2 
    x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/2*a;
    x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/2*a;
    if(x1 === x2){
        return [x1]
    } else if(x1 === NaN){
        return 'The equation doesnot have roots'
    }else{
        return 'The equation doesnot have roots'
    }
    
}

console.log(solveQuadEquation(1,10,25)) */

// Q 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
/* 
function printArray(arr){
        arr.map(element => console.log(element))
       // arr.map(function(element)  { console.log(element)})
}
printArray([2,3,4,5 ,1000]) */
//Q 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

/* function showDateTime(){
    let date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
}
showDateTime() */
//Q 5 Declare a function name swapValues. This function swaps value of x to y.

/* function swapValues(x,y){
    let c = x 
    x = y 
    y = c
    console.log(x, y)
}
swapValues(3,4) */

//Q6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

/* function reverseArray(array){
    let reversed = []
    for (let index = array.length - 1; index >= 0; index--) {
        reversed.push(array[index])
    }
    return reversed

}
console.log(reverseArray([2,4,5,6,7]))
 */
//Q7  do it 
// Q 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
/* function addItem(item , arr){
     arr.push(item)
    return arr
}
console.log(addItem('abdu', ['hussen', 'baba']))

 */

 //Q9 do it 
 //Q 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

 /* function sumOfNumbers(num){
     let sum = 0
    for (let index = 0; index <= num ; index++) {
        sum += index
    }
    return sum
 }

console.log(sumOfNumbers(100))
 */
//Q 11 - 12 do it 
// Q13 

/* function evenAndOdds(num) {
    let even = 0,odd = 0
    for (let index = 0; index <= num; index++) {
        if(index % 2 === 0 ){
            even++
        }else{
            odd++
        }
    }
    return `The number of odds are ${odd}.\nThe number of odds are ${even}.`
}

console.log(evenAndOdds(100))
 */

 //Q 14 Write a function which takes any number of arguments and return the sum of the arguments

 /* function sum(){
     let valuesArray = Object.values(arguments)
      let total = 0
     for (let index = 0; index < valuesArray.length; index++) {
         total += valuesArray[index]
     } 
     return total
    //return  valuesArray.reduce((a,b) => a +b)
 }
 console.log(sum(123, 123, 123)) */

 //Q 15 - 18 do it urself
 
let a = 'javascript'
const b = 'Muzemil'

// Level 3 

//Q1   

/* function userIdGeneratedByUser() {

    let characters = parseInt(prompt('Enter no. of characters'))
    let numberOfIds = parseInt(prompt('Enter no. of ids'))
  //let characters = a, numberOfIds = b
    let string = 'abcdefghijklmnopqrstuvwxyz0123456789'

    let ids = ''
    for (let i = 0; i < numberOfIds; i++) {
        
        let id = ''
        for (let index = 0; index < characters; index++) {

            id += string[Math.floor(Math.random() * 36)]

        }

        ids += id + '\n'

    }
    return ids
}

console.log(userIdGeneratedByUser())
 */

//Q2  Write a function name rgbColorGenerator and it generates rgb colors.

/* function rgbColorGenerator(){

} */
//q3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

/* function arrayOfHexaColors(c){
    let arr = []
    for (let index = 0; index < c; index++) {
        let string = 'abcdef0123456789'
        
        let hexa = '#'
        for(let i = 0; i < 6 ; i++){
            hexa += string[Math.floor(Math.random() * 16)]
        }
        arr.push(hexa)
    }
    return arr
}

console.log(arrayOfHexaColors(10)) */

// Q 4 Do it yourself

//Q 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

/* function changeCharToNumber(str){
        let changed = str
        if(str.includes('a')){
            changed = changed.replace('a', 10)
        }
        if (str.includes('b')) {
        changed = changed.replace('b', 11)
        }
        if (str.includes('c')) {
        changed = changed.replace('c', 12)
        }
        if (str.includes('d')) {
        changed = changed.replace('d', 13)
        }
        if (str.includes('e')) {
        changed = changed.replace('e', 14)
        }
        if (str.includes('f')) {
        changed = changed.replace('f', 15)
        }
    
    return changed
}

function convertHexToRgb(hex){
    let result = hex.slice(1)
    let x1 = result.slice(0,2), x2 = result.slice(2,4), x3 = result.slice(4)
    x1 = changeCharToNumber(x1) 
    x2 = changeCharToNumber(x2)
    x3 = changeCharToNumber(x3)
    let rgb = `rgb(${+x1[0] * 16 + +x1[1]},${+x2[0] * 16 + +x2[1]},${+x3[0] * 16 + +x3[1]})`
    return rgb

}
console.log(convertHexToRgb('#4c51b5'))  */

//Q 7 Write a function generateColors which can generate any number of hexa or rgb colors.

/* function generateColors(type, num){
    
    let result = []
    if(type === 'hexa'){
        let string = 'abcdef0123456789'
        for (let index = 0; index < num; index++) {

            let color = '#'
            for (let index = 0; index < 6; index++) {
                color += string[Math.floor(Math.random() * 16)]
            }
            result.push(color)
        }
         return result
    }
    else if(type === 'rgb'){

        for (let index = 0; index < num; index++) {
            
            let x1 = Math.floor(Math.random() * 256), x2 = Math.floor(Math.random() * 256), x3 = Math.floor(Math.random() * 256)
            let color = `rgb (${x1},${x2},${x3})`
            result.push(color)
        }
        return result
    }else{
        console.log('Please enter a correct type : hexa or rgb')
    }
}

console.log(generateColors('rgb', 3)) */

//Q 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

/* function shuffleArray (arr){
    
    let newArray = []
    for (let index = newArray.length; newArray.length < arr.length;) {
        item =  arr[Math.floor(Math.random() * arr.length)]
       if(!newArray.includes(item)){
           newArray.push(item)
       }
    }
    return newArray
}
console.log(shuffleArray([1,2,3])) */

//Q 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

/* function factorial(num){
    let newNumb = []
   for (let index = 0; index <= num; index++) {
       newNumb.push(index)
   }
   return newNumb.reduce((a,b) => a +b)
} */

/* function factorial(num){
    return (num <= 1) ? 1 : num * factorial(num - 1)
}
console.log(factorial(4)) */

// Q10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

/* function isEmpty(arr){
    
    return  arr.length === 0 ? 'Empty' : 'Not Empty' */
    //let resp = ''
    /* if(arr.length === 0){
        resp += 'Empty '
    }else {
        resp += 'Not empty'
    } */

   // return resp
/* }

console.log(isEmpty([1,2])) */

// Q12 - 17
 // 18 
 /* function isValidVariable(name){

     let valid = 'abcdefghijklmnopqrstuvwxyzäöå_$'
     let validCapital = 'abcdefghijklmnopqrstuvwxyzäöå'.toUpperCase()
     let numbers = '0123456789' 
     let chars = '$_'
     let responde = false
    
     if ((+name[0] / 0) === Infinity || +name[0] === 0){
        responde = false
         
     }else if(name[0] === '$' ||  name[0] === '_'){
        responde = true
    
     }else{

        for (let index = 0; index < name.length; index++) {
            let x = name[index]

            if (valid.indexOf(x) > 0 || validCapital.indexOf(x) > 0 || numbers.indexOf(x) > 0) {
                responde = true
            } else {
                responde = false
            }
        }
    }
     
     return responde
 }

   console.log(isValidVariable('%9name'))  */

 //Q 17 Write a function which checks if all the items of the array are the same data type
  /* function checkType(arr){
    let ans = false
    let first = typeof(arr[0])

    for (let index = 0; index < arr.length; index++) {
        if(first === typeof(arr[index])){
            ans = true
        }else{
            ans = false
        }
    }
   return ans
}
console.log(checkType(['ab','ac','dd',23,true, [], {}]))  */

/* function isValidVariable(name){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let valid = '0123456789' + alphabets + alphabets.toUpperCase()
    let response = ''
    if(name[])
    return response
}

console.log(isValidVariable()) */

//Q 20

/* function reverseContries(){

    let countriesCopy = [...countries]
    return countriesCopy.reverse()
}
console.log(reverseContries()) */

/* function checkAllSame(arr){
    let resul =  arr.reduce(function(p,c,i,arr){
        return typeof(arr[0]) === typeof(c)
    })
    return resul 
}

console.log(checkAllSame([1,7,8,0,'ll'])) */

