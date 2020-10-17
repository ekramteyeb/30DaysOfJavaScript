const allCountries = require('./countries_data')
const countriesLarge = require('./countriesLarge')


/* let filterdNumbers = numbers.filter(function (n) { return n < 5 })
setTimeout(function () {
    console.log('this is setTime timeout')
}, 2000)

setInterval(function () {
    console.log('this is setInterval ')
}, 2000)
 */


//Day nine
//Level one
//Q 1 , 2 do it


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//higher order function like arrr.filter, map , reduce ,

// callback function is a function we pass it as an argument to another function (unanimously)
/* function filterr(arr){
    let filterdNums = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 5){
            filterdNums.push(arr[index])
        }
    }
    return filterdNums
} */
/* console.log('Our filter ')
console.log(filterr(numbers))
console.log('built-up filter ')
console.log(filterdNumbers) */
//filter , map, reduce , 

// Q 3 Use forEach to console.log each country in the countries array.

/* countries.forEach(function(element){
    console.log(element)
});
//using fat arrow function
countries.forEach(element => console.log(element)); */

// 6 Use map to create a new array by changing each country to uppercase in the countries array.
//countries.map(country => console.log(country.toUpperCase()))

//8 Use map to create a new array by changing each number to square in the numbers array
//console.log(numbers.map(num => num * num))

//10 Use map to map the products array to its corresponding prices

/* let priceProduct = products.map(element => `${element.product}:${element.price}`)
console.log(priceProduct) 
 */
// 15 Use filter to filter out only prices with values.
//console.log(products.filter(product => product.price > 0))
/* // 16
console.log(typeof(name))
console.log(typeof(namee))
function getStringLists(arr){
    return arr.filter(element => typeof(element) === 'string')
}
console.log(getStringLists(['abdu', 24, 'hussen', '333', false,'ahmed33', [12,'2332','jemal'], {name:'mohammed'}])) */

// Q 18

//const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

/* let countriesReduced = countries.reduce(function(acc,cur, index, arr){
    let result = acc + ',' + cur
    return arr.length - 1 === index ? result + ' are north Eurpean countries' : result
})
console.log(countriesReduced) */

// Q 20 and 21 
    /* console.log(names.some(element => element.length > 7))
    console.log(names.every(element => element.length > 7)) */
// Q 22 23 , 24 
//Q 23 24 
/* let coun = countries.find(element => element.length === 6)
let counIndex = countries.findIndex(element => element.length === 6)
console.log(counIndex)
console.log(coun) */
//Level 2 

//Q 1 
/* const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
] */

/* let productPrices = products.filter(element => element.price > 0).reduce((a,b) => a + b.price,0)
console.log(productPrices) */

//Q 2 

/* let productPrice = products.reduce((a,b) => a + (b.price > 0 ? b.price : 0)
, 0) */
//OR
/* let productPrice = products.reduce(function(a,b){
  // b = b.price > 0 ? b.price : 0
    return a + (b.price > 0 ? b.price :0)
},0) */
//console.log(productPrice)
// Q 3 
/* const categorizedCountries = (arr) => {
    return arr.filter(element => element.includes('land'))
}

console.log(categorizedCountries(countriesLarge)) */
// Q 4 
    const arrObject = (arr) => {
        let objects = [],current, occurance = 0     
        let letters = arr.map(element => element[0])

        for (let index = 0; index < letters.length; index++) {
            letters = letters.includes(current) ? letters.filter(l => l !== current) : letters

            for (let index = 0; index < letters.length; index++) {

                current =  letters[index] //'A'
                occurance  = letters.filter(element => element.toUpperCase() === current.toUpperCase()).length
            }
            objects.push({current, occurance })

        }
        return objects
    }
    console.log(arrObject(countriesLarge))

    //console.log([2,3,4,5,5,6,5].filter(el => el === 5).length)


  // Level 3 
//Q 2 
/* function mostSpokenLanguages (countries, num){
    let languages = [], country, mostSpoken = []
        countries.forEach(element => {
            element.languages.forEach(el => languages.push(el))
        });
    
    for (let index = 0; index < num; index++) {
        languages.includes(country) ? languages = languages.filter(lang => lang !== country): languages
     let object = {}, count = 0, currentValue;
         for (let i = 0; i < languages.length; i++) {
             currentValue = languages[i];
             object.hasOwnProperty(currentValue) ? ++object[currentValue] : object[currentValue] = 1;

             if (object[currentValue] > count){
                
                count = object[currentValue], country = currentValue 
                
             }
              
         }
        
        mostSpoken.push({country,count})
    
         
    }
    return mostSpoken;
       
}
console.log(mostSpokenLanguages(allCountries,3)) */
// Question 2 
/* function mostSpokenLanguages(countries, num) {

    let languages = [], country, mostSpoken = []
    //let populate all language in the languages array
    countries.forEach(element => {
        element.languages.forEach(el => languages.push(el))
    });
   
    for (let i = 0; i < num; i++) {

        let occurance = 0, current, count = 0
        languages.includes(country) ? languages = languages.filter(lang => lang !== country) : languages
        
        for (let index = 0; index < languages.length; index++) {
            current = languages[index]
            occurance = languages.filter(lang => lang === current).length
            if (occurance > count) {
                count = occurance;
                country = languages[index]
            }
        }
        mostSpoken.push({country, count})
    }
    return mostSpoken
}
console.log(mostSpokenLanguages(allCountries, 10)) */

//Q 3 
/* function mostPopulatedCountries(countries, num){
    let sortedCountries = countries.sort(function(a,b){
        if(b.population > a.population) return 1
        if(b.population < a.population) return -1
        return 0
        
    })
    return sortedCountries.slice(0, num).map(country => `{country : ${country.name}, population: ${country.population}}`)
}


console.log(mostPopulatedCountries(allCountries,10)) */
// Question 4 

 /* const statistics = {
    ages:[31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
    sorted: function () {return this.ages.sort()}, 
    count:function(){return this.ages.length},
    sum:function(){return this.ages.reduce((a,b) => a + b)},
    min:function(){return this.ages.reduce((a,b) => a > b ? b : a)},
    max:function(){return this.ages.reduce((a,b) => a > b ? a : b)},
    range: function(){ return this.max() - this.min()},
    mean: function(){ return Math.round(this.sum() / this.count())},
    median: function(){ return this.count % 2 === 0 ? (this.ages.sort()[(this.count()/2) - 1] + this.ages.sort()[this.count()/2])/2 : this.ages.sort()[Math.floor(this.count()/2)]},
    mode: function () { 
        let object = {}, count = 0, mode, currentValue;
        for (let i = 0; i < this.sorted().length;  i++) {
            currentValue = this.sorted()[i];
            object.hasOwnProperty(currentValue) ? ++object[currentValue] : object[currentValue] = 1;
            if (object[currentValue] > count) count = object[currentValue], mode = currentValue;
        }
        return {mode,count};
     },
    var: function(){
         return  this.sorted().reduce((a, b, index, arr) => (a + (Math.pow((b - this.mean()), 2)) / this.count()),0).toFixed(1)
    },
    std:function (){
        return Math.sqrt(this.sorted().reduce((a,b,index,arr) => (a + (Math.pow((b - this.mean()),2))/this.count()),0)).toFixed(1)
        //return Math.sqrt(this.var()).toFixed(1)
    },
    /* freqDist: function(){
        return this.sorted().map(element => [element, this.sorted().filter(el => el === element).length])
    }

   describe:function(){
       return `
        Count: ${this.count()}
        Sum:  ${this.sum()}
        Min:  ${this.min()}
        Max:  ${this.max()}
        Range:  ${this.range()}
        Mean:  ${this.mean()}
        Median:  ${this.median()}
        Mode:  (${this.mode().mode}, ${this.mode().count})
        Variance:  ${this.var()}
        Standard Deviation:  ${this.std()}`
   }
}
console.log(statistics.describe()) 

console.log(allCountries[0])


/* let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

function getMaxOccurrence(arr) {
    let object = {}, count = 0, mV, currentValue;
    for (let i = 0; i < arr.length;  i++) {
        currentValue = arr[i];
        object.hasOwnProperty(currentValue) ? ++object[currentValue] : object[currentValue] = 1;
        if (object[currentValue] > count) count = object[currentValue], mV = currentValue;
    }
    return mV;
}
console.log(getMaxOccurrence(ages))
console.log(ages.sort())
 */

 /* let nums = [23,23,4,25,25,6,7,23,7,25,25,25, 23]
 console.log(nums.sort(function(a,b){
    return a > b ? 1 : -1
    return 0
 }))

 // returns the first four/n number of maximum occurances

 function maxOcc(arr,num){
     let maxOcu = [], maxElement 
     
    for (let i = 0; i < num; i++) {
    let maxoc = 0, count, element 
        maxOcu.includes(maxElement) ? arr = arr.filter(el => el !== maxElement ) : arr
     for (let index = 0; index < arr.length; index++) {
            element = arr[index]
           count =  arr.filter(el => el === element).length
           if(count > maxoc) maxoc = count, maxElement = arr[index]
         
     }
        maxOcu.push(maxElement)
    }
     return maxOcu
 }
 console.log(maxOcc(nums, 4)) */