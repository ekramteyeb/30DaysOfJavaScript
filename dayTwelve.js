
//Level 0ne 
//Q 1 
/* let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let incomes = text.match(/\d+/gi)
let annualIncomes = (+incomes[0] * 12) + (+incomes[1]) + (+incomes[2] * 12)
console.log(annualIncomes) */

//Q2 
/* let text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'

let numbers = text.match(/[^'-']\d+/gi)
let distance = Math.abs(+numbers[0] - +numbers[numbers.length - 1])
console.log(distance) */

/* function is_valid_variable(str){
    let pattern = /^[a-z]|^$|^_/
    return pattern.test(str
}

console.log(is_valid_variable('i$a0gb00c')) */
// level 2 
// Q 2

/* let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

let parragraphArray = paragraph.split(' ').map(ele => ele)

let parragraphSet = new Set(parragraphArray)

//console.log(parragraphSet)
let wordsWithCount = []

 for (const element of parragraphSet) {
     let pattern = element
     let regEx = new RegExp(pattern,'g')

     let count = paragraph.match(regEx)

    console.log(element,count)
}  */



/* console.log(parragraphArray)
console.log(parragraphSet) */
//console.log(tenMostFrequentWords(paragraph))



function tenMostFrequentWords(word){
    
}
//Q 3


//Level 3 
 // 1 
/* function cleanText(){

    let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    let cleardSentence = sentence.replace(/%|$|@|#|;|&|!/gi,'').split('$').join('')
    return
}

 let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

let pattern = /%|$|@|#|;|&|!/gi


let cleardSentence = sentence.replace(pattern, '').split('$').join('')
//let cleardSentence = sentence.replace(/%|$|@|#|;|&|!/gi, '').split('$').join('')

console.log(cleardSentence)  */

/* let name = 'abdu'

let name1 = new String()
name1 = 'hussen'

console.log(name)
console.log(name1)
 */

let regEx  = 'pattern'/'flag'
let regEx1 = new RegExp()

//let paragraph1 = `I love teaching. If you do not love teaching what else can you love.`
//console.log(paragraph1.match(/[I]/g))


let string = 'I love teaching. If you do not love teaching what else can you love.'

let pattern = /a/gi

let result = string.match(pattern)

console.log(result)

