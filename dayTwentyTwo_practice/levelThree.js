
function generateHexaColor() {
    let string = 'abcdef0123456789'
    let hexa = '#', hexa2 = '#'
        for (let index = 0; index < 6; index++) {
        let random = Math.floor(Math.random() * string.length)
    let random2 = Math.floor(Math.random() * string.length)
    hexa += string[random]
    hexa2 += string[random2]
}
document.querySelector('h1 span').style.color = hexa
document.querySelector('.timediv').style.backgroundColor = hexa2
}
let wrapper = document.querySelector('.wrapper')
let ul = document.querySelector('ul')

document.querySelector('h1 span').style.fontSize = '50px'
document.querySelector('body').style.cssText = 'width:60%; margin:auto; text-align: center'
document.querySelector('h2').style.cssText = 'text-decoration:underline;'
wrapper.style.cssText = 'width:100%; font-size:20px;'



let timediv = document.createElement('div')
timediv.textContent = new Date().toDateString()
timediv.setAttribute('class', 'timediv')
timediv.style.cssText = 'background-color:blue; width:50%;font-size:20px;margin-left:135px;'

wrapper.insertBefore(timediv, ul)
setInterval(() => generateHexaColor(), 1000)


ul.style.listStyle = 'none'
ul.style.cssText = 'text-align:left;'


let challengesArray = asabenehChallenges2020.challenges

for (let index = 0; index < challengesArray.length; index++) {

    let box = document.createElement('div')
    let namediv, topicsdiv, statusdiv

    namediv = document.createElement('div')
    namediv.textContent = challengesArray[index].name
    namediv.style.cssText = 'float:left; width:45%;'

    topicsdiv = document.createElement('div')
    topicsdiv.style.cssText = 'float:left;'
    let detail = document.createElement('details')
    detail.style.cssText = 'list-style:none'

    let summery = document.createElement('summary')
   

    summery.textContent = challengesArray[index].name.slice(11)

    for (const topic of challengesArray[index].topics) {
        let li = document.createElement('li')
        li.textContent = topic
        detail.append(li)
    }
    detail.appendChild(summery)
    topicsdiv.appendChild(detail)


    statusdiv = document.createElement('div')
    statusdiv.textContent = challengesArray[index].status
    statusdiv.style.cssFloat = 'right'

    box.append(namediv,topicsdiv,statusdiv)

    box.style.cssText = 'width:100%; height:auto; margin:2px;font-size:20px; padding:10px;float:left;border-radius:0.5em;'

    if (challengesArray[index].status == 'Done') {
        box.style.backgroundColor = '#5BBC7A'
    } else if (challengesArray[index].status == 'Ongoing') {
        box.style.backgroundColor = '#F7DC5C'

    } else {
        box.style.backgroundColor = '#EB695B'

    }

    ul.appendChild(box)

}


