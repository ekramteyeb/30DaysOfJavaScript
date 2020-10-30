let asabe = asabenehChallenges2020

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



let ul = document.createElement('ul')

//ul.style.cssText = 'position:relative; margin-bottom: 2px; border:solid green 1px;'
document.querySelector('h1 span').style.fontSize = '50px'
document.querySelector('body').style.cssText = 'width:60%; margin:auto; text-align: center'
document.querySelector('h2').style.cssText = 'text-decoration:underline;'
wrapper.style.cssText = 'width:100%; font-size:20px;'



let timediv = document.createElement('div')
timediv.textContent = new Date().toDateString()
timediv.setAttribute('class', 'timediv')
timediv.style.cssText = 'background-color:blue; width:50%;font-size:20px;margin-left:135px;'

wrapper.append(timediv)
setInterval(() => generateHexaColor(), 1000)


ul.style.listStyle = 'none'
ul.style.cssText = 'text-align:left; '


let challengesArray = asabe.challenges

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
wrapper.append(ul)

// append author 
//
//authorDiv.style.cssText = 'float:left; margin-left:40%'

let author = document.createElement('h3')
author.textContent = `${asabe.author.firstName} ${asabe.author.lastName}`
//author.style.cssText = 'padding-top:400px;'
wrapper.appendChild(author)

/* let iconDiv = document.createElement('div')
iconDiv.style.cssText = 'border:1px solid red; height:100px;' */

for (let i = 0; i < asabe.author.socialLinks.length; i++) {
    let socialIcon = document.createElement('div')
    socialIcon.innerHTML = asabe.author.socialLinks[i].fontawesomeIcon
    if (i === 0) {
        socialIcon.style.cssText = 'float:left;height:10px; padding:7px; margin-left:40%;'
    } else {
        socialIcon.style.cssText = 'float:left; height:10px;padding:7px;'
    }
    
    wrapper.append(socialIcon)
}




let bio = document.createElement('p')
bio.style.cssText = 'padding-top:30px;'
bio.textContent = asabe.author.bio
wrapper.appendChild(bio)



let titlediv = document.createElement('div')


let hT = document.createElement('h5')
hT.textContent = 'Titles '
titlediv.appendChild(hT)

for (const iterator of asabe.author.titles) {
    let li = document.createElement('li')
    li.textContent = iterator[0] + ' ' + iterator[1]
    titlediv.append(li)
}

titlediv.style.cssText = 'width:25%; text-align:left; font-size:15px;list-style:none; float:left;'

let skilldiv = document.createElement('div')

let hS = document.createElement('h5')
hS.textContent = 'Skills'
skilldiv.appendChild(hS)

for (const iterator of asabe.author.skills) {
    let li = document.createElement('li')
    let icon = document.createElement('div')
    icon.innerHTML = "<i class='fa fa-check-square' style='font-size:15px; float:left; margin-right:4px; color:green;'></i>"
    li.textContent =  iterator
    skilldiv.append(icon,li)
}

skilldiv.style.cssText = 'width:26%; text-align:left; font-size: 15px;list-style:none; float:left;'

let qualifydiv = document.createElement('div')
let hQ = document.createElement('h5')
hQ.textContent = 'Qualification'
qualifydiv.append(hQ)

for (const iterator of asabe.author.qualifications) {
    let li = document.createElement('li')
    let icon = document.createElement('div')
    icon.innerHTML = "<i class='fas fa-user-graduate' style='font-size:15px;float:left; margin-right:4px;'></i>"

    li.textContent = iterator
    qualifydiv.append(icon,li)
}

qualifydiv.style.cssText = 'width:42%; text-align:left; font-size:15px;list-style:none; float:right; padding:10px;'

wrapper.append(titlediv, skilldiv,qualifydiv)
wrapper.append('______________________________________________________')

let keyh = document.createElement('h5')
keyh.textContent = 'Keywords'
keyh.style.cssText = 'text-align:left; padding-bottom:0px;'

wrapper.append(keyh)

for (const iterator of asabe.keywords) {
    let button = document.createElement('button')
    let string = 'abcdef0123456789'
    let hexa = '#'
    for (let index = 0; index < 6; index++) {
        let random = Math.floor(Math.random() * string.length)
        hexa += string[random]
    }
    button.innerHTML = '#' + iterator
    
    button.style.cssText = `border:none; margin:4px; font-size:14px; border-radius:0.5em; background-color:${hexa}; font-style:italic;`


    wrapper.appendChild(button)
}









