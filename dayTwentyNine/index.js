let topic = document.querySelector('.container h1')
topic.style.cssText = 'font-size:80px;'
let fontLists = ['Georgia, serif', 'Palatino, serif', "Times New Roman", 'Arial, Helvetica, sans-serif', 'Arial Black, Gadget, sans-serif', 
'"Lucida Sans Unicode", "Lucida Grande", sans-serif', '"Lucida Console", Monaco, monospace', '"Courier New", Courier, monospace'
]
let container = document.querySelector('.container')
container.style.cssText = ' padding:30px; margin:auto; border-radius:1em;'



let value = topic.innerHTML.split('')
console.log(value)
value = value.map(n => `<span>${n}</span>`)
value = value.join('')
topic.innerHTML = value

document.querySelectorAll('.container h1 span').forEach(x => x.style.color = generateHexa())
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * fontLists.length)

    topic.style.cssText = 'font-size:80px;'
    document.querySelectorAll('.container h1 span').forEach(x => x.style.color = generateHexa())
    container.style.backgroundColor = generateHexa()
    container.style.fontFamily = fontLists[randomNumber]
    

},2000)

function generateHexa(){
    let string = 'abcdef0123456789'
    let hexa = '#'
    for (let index = 0; index < 6; index++) {
        hexa += string[Math.floor(Math.random() * string.length)]
    }
    return hexa
}