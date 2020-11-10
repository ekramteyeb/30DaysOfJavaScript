let asabe = asabenehChallenges2020
let title = document.querySelector('.container h1')
title.textContent = asabe.author.firstName + ' ' + asabe.author.lastName



let role = document.querySelector('.role')

setInterval(() => {

    role.innerHTML = ''
    let random = Math.floor(Math.random() * asabe.author.titles.length)
    role.append(asabe.author.titles[random][0]) 

    let animateDiv = document.createElement('div')
    animateDiv.setAttribute('class', 'animateDiv')
    animateDiv.textContent = asabe.author.titles[random][1]
    animateDiv.style.cssText = ' width:25%; display:inline;'
    role.append(animateDiv)
    
},2000)

document.querySelectorAll('.course').forEach(div => {
    div.addEventListener('mouseover', (e)=>{
        e.target.style.cssText = 'background-color:#EEDFDE;font-size:17px;'

    })
    div.addEventListener('mouseout', (e) => { e.target.style.cssText = 'background-color:rgba(252, 251, 250, 0.993);'})

})

//techelogies taught 

let teachings = document.querySelector('.teachings p span')

let alltopics = []

//collects all topics taught by the author and push in to alltopics array
/* asabe.challenges.forEach(challenge => {
    alltopics.push(...challenge.topics)
}) */

asabe.challenges.forEach(challenge => {
    challenge.topics.forEach(topic => {
        alltopics.push(topic)
    })
})

setInterval(() => {
    let random = Math.floor(Math.random() * alltopics.length) 
    teachings.textContent = alltopics[random]
    teachings.style.color = hexaGenerator()

},2000)

const hexaGenerator = () => {
    let string = 'abcdef0123456789'
    let hexa = '#'
    let random 
    for (let index = 0; index < 6; index++) {
        random = Math.floor(Math.random() * string.length) 
        hexa += string[random]
    }
    return hexa
}
