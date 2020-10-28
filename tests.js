//generates numbers from 0 - 1  Math.random()
let random = 0

let arr = []
//
for (let index = 0; index < 5; index++) {

   random =  Math.round(Math.random() * 100)
   arr.push(random)
    
}
console.log(arr)