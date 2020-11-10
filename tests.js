//generates numbers from 0 - 1  Math.random()
//Exercise level 2 
//Q 1
let random = 0
let id = ''
let count = 10

for (let index = 0; index <= count; index++) {
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    random = Math.floor(Math.random() * string.length)
    id += string[random]
}
console.log(id)


// Q 2 

let hexa = '#'

for (let index = 0; index < 6; index++) {
    let string = 'abcdef0123456789';
    random = Math.floor(Math.random() * string.length)
    hexa += string[random]
}
console.log(hexa)

//Q 3 


let x1 = 'rgb('
let rgb

for (let index = 0; index < 3; index++) {
    if(index < 2 ){
        x1 += random = Math.floor(Math.random() * 255) + ','
    }else{
        x1 += random = Math.floor(Math.random() * 255) + ')'
    }
    
}

   /*  
    x2 = random = Math.floor(Math.random() * 255)
    x3 = random = Math.floor(Math.random() * 255)
    
rgb = `rgb(${x1},${x2},${x3})` */

console.log(x1)

// 4 

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finleand',
    'Germany',
    'Hungary',
    'Ireleand',
    'Japan',
    'Kenya'
]

let newCountries = []
for (let index = 0; index < countries.length; index++) {
       newCountries.push(countries[index].toUpperCase())
}
console.log(newCountries)


//6
let newArrays = []
for (let index = 0; index < countries.length; index++) {
    let current = countries[index] 

    newArrays.push([current, current.slice(0,3).toUpperCase(),current.length])
}
console.log(newArrays)

//7 
let landArray = []
for (let index = 0; index < countries.length; index++) {
    let current = countries[index]
    if(current.includes('land')){
        landArray.push(current)
    }
    
}
console.log(landArray.length == 0 ? 'All these countries are without land' : landArray)

// Ternary operator condition ? true : false 
// 8 
console.log('nahom zersenay'.slice(-2))
//current.slice(-2) == 'ia'

// 9 
let maxCountry = '', max = 0

for (let index = 0; index < countries.length; index++) {
    let current = countries[index];
    if (current.length > max){
        max = current.length
        maxCountry  = current
    }
}
console.log(maxCountry)