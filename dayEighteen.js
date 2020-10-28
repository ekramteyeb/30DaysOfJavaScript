


// Level one
//1
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


/* const url = countriesAPI
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(con => console.log(con.name, con.capital, con.languages, con.population, con.area))
    })
    .catch(error => console.log(error)) */

//2 

/* const url = catsAPI
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(cat => console.log(cat.name, cat.weight['metric'].split('-').reduce((a, b) => (+a + +b) / 2)))
    })
    .catch(error => console.log(error)) */
    
//countrie with thier number of official languages 

/* const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.map(country => console.log(country.name, country.languages.length))
    })
    .catch(error => console.log(error)) */

//calculate total number of official languages spoken in world wide

//Q 2

/* const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {

     let maxArea = data.reduce((acc, curr , index, data) => acc > curr.area ? acc : curr.area ,data[0].area)
      console.log('text',maxArea)
    })
    .catch(error => console.log(error)) 
 */
/* const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let country = '', maxArea = data[0].area
        for (let i = 0; i < data.length; i++) {
            let curr = data[i].area
            if (curr > maxArea) {
                maxArea = curr
                country = data[i].name
            }
        }
        console.log(country, maxArea)
    })
    .catch(error => console.log(error))  */

/* //Q 3
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        let allCountries = []
        for (const country of data) {
            allCountries.push(...country.languages.map(lang => lang.name))
        }
        let allLanguageSet = new Set(allCountries)

       console.log('Total official Languages : ', allLanguageSet.size)
    })
    .catch(error => console.log(error))
 */
// level one 

//Q 1
/* function increaseByOne() {
    let x = 0
    function addone() {
        x += 1
        return  x
    }

    return addone
}

const increase = increaseByOne()

console.log(increase())
 */
/* function increaseByThree() {
    let x = 0
    function addone() {
        x += 1
        return x
    }
    function addtwo() {
        x += 2
        return x
    }
    function addthree() {
        x += 3
        return x
    }

    return {
        addone:addone(),
        addtwo:addtwo(),
        addthree:addthree()
    }
}

const increase = increaseByThree()

console.log(increase.addone)
console.log(increase.addtwo)
console.log(increase.addthree) */

//Level 3 
/*
    Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
    It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
    Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

function personAccount(){
    let firstname, lastname, incomes, expenses
    function totalIncome(){
        return incomes
    }
}

function counter(){
    let counter = 0
    function addone(){
        counter += 1 
        return counter
    }
    function addtwo() {
        counter += 2
        return counter
    }

    return {
        addone:addone,
        addtwo:addtwo
    }
}
const plusOne = counter()
/* console.log(plusOne.addone())
console.log(plusOne.addtwo())
console.log(plusOne.addtwo()) */