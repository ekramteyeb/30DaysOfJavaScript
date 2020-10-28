

    document.querySelector('body').style.cssText = 'margin:auto; width:70%; text-align:center;'
    let container = document.querySelector('.container')
    container.style.cssText = 'width:100%;'
    let h1 = document.createElement('h1')
    h1.textContent = 'Number Generator'
    let h2 = document.createElement('h2')
    h2.textContent = '30 Days of JavaScript DOM :Day two'
    h2.style.textDecoration = 'underline'
    let p = document.createElement('p')
    p.textContent = 'Author : Asabeneh Yetayeh'

    container.append(h1,h2,p)



    for (let index = 0; index <= 101; index++) {
        let button = document.createElement('button')
        button.textContent = index
        button.style.cssText = 'width:16%;font-size:25px; margin:2px;padding:11px; border:none;'
              
        if (index != 2 && index % 2 == 0){
            button.style.backgroundColor = '#22BF73'
        }else{
            if(index !== 3 && index !== 5 && index !== 7 && (index == 1 || index % 3 == 0 || index % 5 == 0 || index % 7 == 0)){
                button.style.backgroundColor = '#FDDB3A'
            }else{
                button.style.backgroundColor = '#FD5E53'
            }
        }

        container.appendChild(button)
        
    }







let containerCountries = document.querySelector('.containerCountries')
containerCountries.style.cssText = 'width:100%;'
let h1c = document.createElement('h1')
h1c.textContent = 'World Countries'
let h2c = document.createElement('h2')
h2c.textContent = '30 Days of JavaScript Challenge'
h2c.style.textDecoration = 'underline'
let pc = document.createElement('p')
pc.textContent = 'Author : Asabeneh Yetayeh'

let pc2 = document.createElement('p')
pc2.textContent = 'Total number of countries' + ' ' +  countries.length

containerCountries.append(h1c, h2c, pc,pc2)

for (let index = 0; index < countries.length; index++) {
    let button = document.createElement('button')
    button.textContent = countries[index].name
    button.style.cssText = 'height:104px; width:120px; font-size:15px;margin:1px;\
             float:left;border:none; background-color:#FEFEFE;border:solid 1px #e1e1e3'
    
    containerCountries.appendChild(button)

}



