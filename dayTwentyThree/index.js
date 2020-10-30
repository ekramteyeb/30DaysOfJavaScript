


const wrapper = document.querySelector('.wrapper')
wrapper.style.cssText = 'margin:auto; width:70%;text-align:center'

let title = document.createElement('h1')
let project = document.createElement('p')
let author = document.createElement('p')

title.textContent = 'Number Generator'
project.textContent = '30DaysOfJavaScript:DOM Day 3'
author.textContent = 'Author: Asabeneh Yetayeh'

title.style.cssText = 'color:green'
project.style.cssText = 'font-size:20px;'

wrapper.append(title,project,author)

let generateNumber = document.createElement('input')
let generateNumberButton = document.createElement('button')
generateNumberButton.textContent = 'Generate numbers'

generateNumber.style.cssText = 'border:1px solid green; width:50%; border-radius:0.5em; margin:10px; padding:8px;'
generateNumberButton.style.cssText = 'border:none; width:20%;  color:white; margin:10px; margin-right:80px; padding:8px; background-color:#5CBC7A;'
wrapper.append(generateNumber, generateNumberButton)

let buttonsDiv = document.createElement('div')

let inputValue 

generateNumberButton.addEventListener('click',() => {
    let allButtons = document.querySelectorAll('.buttons')
    
    if(allButtons.length > 0 && generateNumber.value !== ''){
        buttonsDiv.innerHTML = ''
    }
    
    inputValue = +generateNumber.value
    let button
    for (let index = 0; index < inputValue; index++) {
        button = document.createElement('button')
        button.setAttribute('class','buttons')
        button.style.cssText = 'height:54px; width:15%; font-size:25px; margin:1px; float:left;border:none'
        button.textContent = index
        buttonsDiv.appendChild(button)
        if (index !== 2 && index % 2 == 0) {
            button.style.backgroundColor = '#22BF73'
        } else {
            if (index !== 3 && index !== 5 && index !== 7 && (index === 1 || index % 3 === 0 || index % 5 == 0 || index % 7 == 0)) {
                button.style.backgroundColor = '#FDDB3A'
            } else {
                button.style.backgroundColor = '#FD5E53'
            }
        }
    }
    wrapper.appendChild(buttonsDiv)
    generateNumber.value = ''
})


   

