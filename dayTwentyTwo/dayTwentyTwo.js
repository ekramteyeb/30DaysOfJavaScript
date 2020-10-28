
//const allCountries = require('./countries_data');

(function styleThePage(){

    document.getElementsByClassName('wrapper')[0].style.cssText = 'margin:auto; width:70%;text-align:center'

    })()
    
    
    let button 
        for (let index = 0; index < 102; index++) {
            button = document.createElement('button')
            button.style.cssText = 'height:54px; width:15%; font-size:25px; margin:1px; float:left;border:none'
            button.textContent = index
            document.getElementsByClassName('container')[0].appendChild(button)
            if(index !== 2 && index % 2 == 0 ){
                button.style.backgroundColor = '#22BF73'
            } else {
                if (index !== 3 && index !== 5 && (index % 3 === 0 || index % 5 == 0 || index % 7 == 0)) {
                    button.style.backgroundColor = '#FDDB3A'
                }else{
                    button.style.backgroundColor = '#FD5E53'
                }
                
            }
            
        }
        
    let totalCountries = document.createElement('p')
    totalCountries.textContent = 'Total number of countries ' + countries.length
    document.getElementsByClassName('containerCountries')[0].appendChild(totalCountries)

    let buttonCountry
        for (let index = 0; index < countries.length; index++) {
            buttonCountry = document.createElement('button')
            buttonCountry.style.cssText = 'height:104px; width:120px; font-size:15px;margin:1px;\
             float:left;border:none; background-color:#FEFEFE;border:solid 1px #e1e1e3'
            buttonCountry.textContent = countries[index].name
            document.getElementsByClassName('containerCountries')[0].appendChild(buttonCountry)
            /* if (index !== 2 && index % 2 == 0) {
                buttonCountry.style.backgroundColor = '#22BF73'
            } else {
                if (index !== 3 && index !== 5 && (index % 3 === 0 || index % 5 == 0 || index % 7 == 0)) {
                    buttonCountry.style.backgroundColor = '#FDDB3A'
                } else {
                    buttonCountry.style.backgroundColor = '#FD5E53'
                }

            } */

        }

    /* //creating dOm element and appending to document body .
    let title
    for (let index = 0; index < 4; index++) {
        title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2' + ' ' + index
        document.body.appendChild(title)

    }
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    document.body.appendChild(ul)
    li.textContent = 'Humman being'
    ul.appendChild(li)
    //clears /remove all child element and its values 
    ul.innerHTML = ''
 */

