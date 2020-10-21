//Ex Level 3

// 1 
const arr = [12222, 333333, 444444, 555555, 666666, 777777, 999999, 1000000, 88888]
console.time('while Loop')
let i = 0, sum = 0
while (i < arr.length) {
    sum += arr[i]
    i++
}
console.log(sum)
console.timeEnd('while Loop')


console.time('for Loop')
let  sum1 = 0
for (let ii = 0; ii < arr.length; ii++) {
    sum1 += arr[ii]
}
console.log(sum1)
console.timeEnd('for Loop')

console.time('for of Loop')
let sum2 = 0
for (let iterator of arr) {
    sum2 += iterator
}
console.log(sum2)
console.timeEnd('for of Loop')

console.time('forEach of Loop')
let iv = 0, sum3 = 0
arr.forEach(ele => sum3 += ele)
console.log(sum3)
console.timeEnd('forEach of Loop')