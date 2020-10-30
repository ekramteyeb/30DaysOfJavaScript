
document.querySelector('body').style.cssText = 'margin:auto;text-align:center;'

const wrapper = document.querySelector('.wrapper')
wrapper.style.cssText = 'margin:auto; width:60%; height:200px; margin-top:150px;'

let value 
let message = document.querySelector('.message')

let hmessage = document.createElement('h1')
hmessage.textContent = 'Press any keyboard key'
message.style.cssText = 'box-shadow : 5px 5px 20px 5px #888888; border:1px #DFE1E4 solid; '
message.appendChild(hmessage)

let keyCode = document.querySelector('.keyCode')
keyCode.style.cssText = 'height:150px; width:120px; display:none; font-size:30px; color:green;border:1px solid #DFE1E4; margin:auto;margin-top:30px;'
let hkeyCode = document.createElement('h1')

keyCode.appendChild(hkeyCode)


/* function getKey(e) {
    //alert("The key code is: " + e.keyCode);
    message.innerHTML = ''
    let result = document.createElement('h1')
    result.textContent = e.key
    result.style.cssText = 'color:green;display:inline-block; margin-left:10px;'
    hmessage.textContent = 'You pressed' 
    message.append(hmessage, result)
    hmessage.style.cssText = 'display: inline-block;'
    keyCode.style.display = 'block'
    hkeyCode.textContent = e.keyCode
}

document.onkeypress = getKey; */

// or 

document.addEventListener('keypress', (e) => {
    
    message.innerHTML = ''
    let result = document.createElement('h1')
    result.textContent = e.key
    result.style.cssText = 'color:green;display:inline-block; margin-left:10px;'
    hmessage.textContent = 'You pressed'
    message.append(hmessage, result)
    hmessage.style.cssText = 'display:inline-block;'
    keyCode.style.display = 'block'
    hkeyCode.textContent = e.keyCode
})


