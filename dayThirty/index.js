
document.querySelector('.header p span').textContent = countries.length


//populates the page with the names of the countries when the page loads
 //generateCountries('', countries)
let insertedText = ''
let sortBy = ''
let sortedCountries = []
let upArrow = " <i class='fa fa-long-arrow-up'></i>"
let downArrow = " <i class='fa fa-long-arrow-down'></i>"

let name = document.querySelector('.name span')
let capital = document.querySelector('.capital span')
let population = document.querySelector('.population span')


generateAllMatching(insertedText, countries)

let togglerName = ''
document.querySelector('.name').addEventListener('click', (e) => {
    capital.innerHTML = ''
    population.innerHTML = ''
    console.log(name.innerHTML)
    let text = document.querySelector('.input').value
    let content = document.querySelector('.content')

    if (content !== null) {
        content.innerHTML = ''
    }

    if (togglerName){
        name.innerHTML = upArrow
        
        countries = countries.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0

        })
        togglerName = !togglerName
    }else{
        name.innerHTML = downArrow
        countries = countries.sort((a, b) => {
            if (a.name > b.name) return -1
            if (a.name < b.name) return 1
            return 0

        })
        togglerName = !togglerName
    }
    
    document.querySelector('.input').addEventListener('input', generateAllMatching(insertedText, countries))

   
})

let togglerCapital= 'true'
document.querySelector('.capital').addEventListener('click', (e) => {
    
    name.innerHTML = ''
    population.innerHTML = ''

    let content = document.querySelector('.content')
    let text = document.querySelector('.input').value

    if (content !== null) {
        content.innerHTML = ''
    }

    if(togglerCapital){
        capital.innerHTML = upArrow
        countries = countries.sort((a, b) => {
            if (a.capital > b.capital) return 1
            if (a.capital < b.capital) return -1
            return 0
        })
        togglerCapital = !togglerCapital
    }else{
        capital.innerHTML = downArrow
        countries = countries.sort((a, b) => {
            if (a.capital > b.capital) return -1
            if (a.capital < b.capital) return 1
            return 0
        })
        togglerCapital = !togglerCapital
    }
    document.querySelector('.input').addEventListener('input', generateAllMatching(insertedText, countries))

})

let togglerPopulation = 'true'
document.querySelector('.population').addEventListener('click', (e) => {
    capital.innerHTML = ''
    name.innerHTML = ''
    let content = document.querySelector('.content')
    if (content !== null) {
        content.innerHTML = ''
    }
     
    if(togglerPopulation){
        population.innerHTML = upArrow
        countries = countries.sort((a, b) => {
            if (a.population > b.population) return 1
            if (a.population < b.population) return -1
            return 0

        })
        togglerPopulation = !togglerPopulation
    }else{
        population.innerHTML = downArrow
        countries = countries.sort((a, b) => {
            if (a.population > b.population) return -1
            if (a.population < b.population) return 1
            return 0

        })
        togglerPopulation = !togglerPopulation
    }
    
    //countries = filterArray(insertedText, countries)
    document.querySelector('.input').addEventListener('input', generateAllMatching(insertedText, countries))
    
})

document.querySelector('.input').addEventListener('input', (e) => {
   
    insertedText = e.target.value
    let content = document.querySelector('.content')
    if(content !== null) {
        content.innerHTML = ''
    }
   /*  if(sortBy === 'capital'){
        countries = countries.sort((a,b) => {
            if(a.capital > b.capital) return 1
            if(a.capital < b.capital) return -1
            return 0
        })
    } */
    
    

    generateAllMatching(e.target.value,countries)
    
})
document.querySelector('.input').addEventListener('', (e) => {
    let content = document.querySelector('.content')
    if (content !== null) {
        content.innerHTML = ''
    }

    generateAllMatching(e.target.value, countries)
}) 
 

    



// generate country details and filter by the given text of 
function filterArray (text, array) {
    let regExp = new RegExp(text, 'gi')
    let filterdArray 
    filterdArray = array.filter(country => (country.name + country.capital + (country.languages.length > 0 ? country.languages.reduce((la, lb) => lb + la, '') : '')).toLowerCase().match(regExp))  
    return filterdArray
}

function generateAllMatching(text, array){

    array =  filterArray(text,array)
    sortedCountries = array
    
    let inputText = document.querySelector('.header p')
   // console.log(array[0].languages.reduce((la,lb) => la + lb, ''))

    inputText.innerHTML = ''

    if(text != ''){
         inputText.innerHTML = 'Countries matching the criteria are ' + ` <span style="color:green">${array.length}</span>`
    }else{
        inputText.innerHTML = 'Total number of countries are ' + ` <span style="color:green">${array.length}</span>`

    }
    let buttonCountry
    for (let index = 0; index < array.length; index++) {
        let country = array[index]
        buttonCountry = document.createElement('div')
        let image = document.createElement('img')
        let capital = document.createElement('p')
        let languages = document.createElement('p')
        let population = document.createElement('p')
        let name = document.createElement('div')

        name.textContent = `${country.name}`
        name.style.cssText = 'text-align:center; padding:18px;'
        capital.textContent = `Capital : ${country.capital}`
        languages.textContent = `Languages : ${country.languages}`
        population.textContent = `Population : ${country.population}`
        languages.style.margin = '0'
        capital.style.margin = '0'
        population.style.margin = '0'
        image.setAttribute('src', country.flag)
        buttonCountry.setAttribute('class', 'buttonCountries')
        buttonCountry.style.cssText = 'height:250px; width:13.29%;font-size:13px; margin:4px;\
               background-color:white; display:inline-table; border:solid 1px #e1e1e3; text-align:left; padding:10px; '
        buttonCountry.append(image, name, capital, languages,population)
        document.querySelector('.content').append(buttonCountry)
    }
}







  







//Generate and filters countries start with a given text 
function generateCountries(text, array) {

    let buttonCountry
    array = array.filter(country => country.name.toLowerCase().startsWith(text.toLowerCase()))
    document.querySelector('.header p').innerHTML = ''
    if (text != '') {
        document.querySelector('.header p').innerHTML = 'Countries starting with  ' + ` <span style="color:red">${text}</span>` + ' are ' + ` <span style="color:cyan">${array.length}</span>`
    }
    for (let index = 0; index < array.length; index++) {

        let country = array[index]
        buttonCountry = document.createElement('div')
        let image = document.createElement('img')
        let capital = document.createElement('p')
        let languages = document.createElement('p')
        let population = document.createElement('p')
        let name = document.createElement('div')

        name.textContent = `${country.name}`
        name.style.cssText = 'text-align:center; padding:18px;'
        capital.textContent = `Capital : ${country.capital}`
        languages.textContent = `Languages : ${country.languages}`
        population.textContent = `Population : ${country.population}`
        languages.style.margin = '0'
        capital.style.margin = '0'
        population.style.margin = '0'
        image.setAttribute('src', country.flag)
        buttonCountry.setAttribute('class', 'buttonCountries')
        buttonCountry.style.cssText = 'height:250px; width:13.29%;font-size:13px;margin:4px;\
               background-color:white; display:inline-table; border:solid 1px #e1e1e3; text-align:left; padding:10px; '
        buttonCountry.append(image, name, capital, languages, population)
        document.querySelector('.content').append(buttonCountry)
    }
}  




 /* function callMe(e) {
     document.querySelector('.content').innerHTML = e.target.value
 } */