
document.querySelector('.header h4 span').textContent = countries.length


//populates the page with the names of the countries when the page loads
 //searchWithInitialWord('', countries)
let toggler = true

document.querySelector('.start').addEventListener('click', (e) => {
    toggler = false
    document.querySelector('.searchbutton').style.cssText = 'background-color: #895BE6;'
    e.target.style.cssText = 'background-color:#581CB8;'
})
document.querySelector('.searchbutton').addEventListener('click', (e) => {
    toggler = true
    document.querySelector('.start').style.cssText = 'background-color: #895BE6;'
    e.target.style.cssText = 'background-color:#581CB8;'
})


document.querySelector('.input').addEventListener('input', (e) => {
    let content = document.querySelector('.content')
    if(content !== null) {
        content.innerHTML = ''
    }

    toggler ? searchWithAnyWord(e.target.value, countries) : searchWithInitialWord(e.target.value, countries)
})
document.querySelector('.input').addEventListener('mouseover', (e) => {
    let content = document.querySelector('.content')
    if (content !== null) {
        content.innerHTML = ''
    }

    toggler ? searchWithAnyWord(e.target.value, countries) : searchWithInitialWord(e.target.value, countries)
}) 
 
function searchWithInitialWord(text, countries){
    let buttonCountry 
    
    countries = countries.filter(country => country.name.toLowerCase().startsWith(text.toLowerCase()))
    document.querySelector('.header p').innerHTML = ''
    if(text != ''){
      
        document.querySelector('.header p').innerHTML = 'Countries containing ' + ` <span style="color:red">${text}</span>` + ' are ' + ` <span style="color:cyan">${countries.length}</span>`

    }

    for (let index = 0; index < countries.length; index++) {

        buttonCountry = document.createElement('button')
        buttonCountry.setAttribute('class','countrybuttons')
        buttonCountry.style.cssText = 'height:104px; width:14%;font-size:15px;margin:1%;\
                float:left;border:none;border:solid 1px #e1e1e3; color:white;'
        buttonCountry.textContent = countries[index].name
        
        //buttonCountry.style.backgroundColor = 'red'
        document.querySelector('.content').append(buttonCountry)
    }
}  

searchWithAnyWord('', countries)

/* document.querySelector('.input').addEventListener('input', (e) => {
    let content = document.querySelector('.content')
    if (content !== null) {
        content.innerHTML = ''
    }
    searchWithAnyWord(e.target.value, countries)
})

 */
function searchWithAnyWord(text, array){
    let buttonCountry

    let regExp = new RegExp(text,'gi')

    array = array.filter(country => country.name.toLowerCase().match(regExp))
    document.querySelector('.header p').innerHTML = ''
    if(text != ''){
        document.querySelector('.header p').innerHTML = 'Countries containing ' + ` <span style="color:yellow">${text}</span>` + ' are ' + ` <span style="color:green">${array.length}</span>`

    }

    for (let index = 0; index < array.length; index++) {

        buttonCountry = document.createElement('button')
        buttonCountry.setAttribute('class', 'countrybuttons')
        buttonCountry.style.cssText = 'height:104px; width:14%;font-size:15px;margin:1%;\
                float:left;border:none; color:white; border:solid 1px #e1e1e3'
        buttonCountry.textContent = array[index].name
        document.querySelector('.content').append(buttonCountry)
    }
}


  



 /* function callMe(e) {
     document.querySelector('.content').innerHTML = e.target.value
 } */