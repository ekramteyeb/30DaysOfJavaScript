function generateHexa() {
    let string = 'abcdef0123456789'
    let hexa = '#', random
    let hexa1 = '#', random1
    for (let index = 0; index < 6; index++) {
        random = Math.floor(Math.random() * string.length)
        random1 = Math.floor(Math.random() * string.length)
        hexa += string[random]
        hexa1 += string[random1]
    }

    document.getElementsByTagName('span')[0].style.color = hexa
    document.getElementById('time').style.backgroundColor = hexa1

}
let container = document.querySelector('.container')
let ul = document.createElement('ul')


    document.getElementsByTagName('body')[0].style.cssText = 'margin:auto;border:0px; width:60%;text-align:center'
    container.style.cssText = 'text-align:center'
    document.getElementsByTagName('span')[0].style.cssText = 'font-size:55px;'
    setInterval(() => generateHexa(), 1000)
    //document.getElementsByTagName('h1')[0].style.cssText = 'padding-left:3%'
    document.getElementsByClassName('time')[0].innerHTML = new Date().toDateString()
    document.getElementById('time').style.cssText = 'background-color:red; width:50%; text-align:center; margin-left:25%;'
    document.getElementsByTagName('h2')[0].style.cssText = 'padding-left:25%'
    ul.style.listStyle = 'none'

   
container.appendChild(ul)

    let outerDiv, p1, details,p2,p3,summary
    for (const challenge of asabenehChallenges2020.challenges) {
        
        outerDiv = document.createElement('div')

        p1 = document.createElement('div')
        p1.textContent = challenge.name
        p1.style.cssText = 'width:40%; float:left;'
        p2 = document.createElement('div')
        detail = document.createElement('details')
       
        summary = document.createElement('summary')
        summary.textContent = challenge.name.slice(11)
        
        for (const topic of challenge.topics) {
            li = document.createElement('li')
            li.textContent = topic
            detail.append(li)
        }
        
        detail.append(summary)
        
        p2.appendChild(detail)
        p2.style.cssText = 'float:left;'

        p3 = document.createElement('div')        
        p3.textContent = challenge.status
        p3.style.cssText = 'float:right;'

        outerDiv.setAttribute('class', 'uldivs')
        
        outerDiv.append(p1,p2,p3)
        outerDiv.style.cssText = "width:100%;margin-bottom:3px;padding:10px;float:left; border-radius:0.5em;"
        
        ul.appendChild(outerDiv)
    }
    
    let lis = document.getElementsByClassName('uldivs')
    
     for (let i = 0; i < lis.length; i++) {
         
        
        if (i == 0) {
            
            lis[i].style.backgroundColor = '#5BBC7A'
            
         } else if (i == 1) {
            lis[i].style.backgroundColor = '#F7DC5C'
        } else {
            lis[i].style.backgroundColor = '#EB695B'
        }
    } 


let biodiv = document.createElement('div')
let author = document.createElement('h2')
let socialIcons = document.createElement('div')
socialIcons.innerHTML = '<i class="fab fa-linkedin"></i>'
   // asabenehChallenges2020.author.socialLinks.forEach(l => socialIcons.innerHTML = `${l.fontawesomeIcon}`)

    author.textContent = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
    biodiv.append(author, socialIcons)
    container.appendChild(biodiv)
   