
const challenge = "30 Days of JavaScript"
console.log(challenge)

console.log(challenge.search(/a/g));
console.log(challenge.search("a",0))
console.log(challenge.match(/a/g))

/* let age = prompt('enter age'), ageLimit = 18;
if (typeof (age + 10) === 'string' || age <= 0) {
    console.log('enter a valid age ')
} else if (age >= ageLimit) {
    console.log('You are old enought to drive')
} else {
    console.log(`You are left with ${ageLimit - age} years to drive.`)
} */



    let grade = 90;

    switch (true) {
        case grade >= 80 && grade <= 100 : 
            console.log('A');
            break;
        case grade >= 70 && grade <= 89:
            console.log('B');
            break;
        case grade >= 60 && grade <= 69:
            console.log('C');
            break;
        case grade >= 50 && grade <= 59:
            console.log('D');
            break;
        case grade >= 0 && grade <= 49 :
            console.log('F');
            break;
        default:
        console.log('Enterd value is not a number')
    }

/* let season = prompt('Enter a season') */
let season = 'February', autumn = ['September', 'Octomber', 'November'], 
    winter = ['December','January','February'],
    spring = ['March', 'April', 'May'], 
    summer = ['June','July','August']; 

switch (season) {
    
    case autumn[autumn.indexOf(season)] :
        console.log('Autumn')
        break;
    case winter[winter.indexOf(season)]:
        console.log('Winter')
        break;
    case spring[spring.indexOf(season)]:
        console.log('Spring')
        break;
    case summer[summer.indexOf(season)]:
        console.log('Summer')
        break;
    default:
        console.log('enter a valid month')
        break;
}