document.querySelector('html').style.cssText = 'background-color:#C0C0C0'
document.getElementsByTagName('body')[0].style.cssText = 'margin:auto; width:80%;text-align:center;'
document.getElementsByClassName('container')[0].style.cssText = 'background-color:white;width:100%;border:1px solid cyan;height:atuo;'

document.querySelector('p').textContent = 'This is first Paragraph'
document.querySelector('#three').textContent = 'This is third paragraph'

let allps = document.querySelectorAll('p')
for (let i = 0; i < allps.length; i++ ) {
    if(i % 2 === 0 ){
        allps[i].style.color = 'green'
    }else{
        allps[i].style.color = 'red'
    }
   
    allps[i].setAttribute('class','ppp')
}
allps[3].textContent = 'This is modified paragraph four'

let appPPPClass = document.getElementsByClassName('ppp')

//appPPPClass[0].style.color = 'red'