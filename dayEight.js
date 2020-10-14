/* // Q 1 

const dog = {}
dog.name = 'buchi'
dog.legs = 4
dog.color = 'Dalecha'
dog.age = 5
dog.bark = function(){return 'wof wof'}
dog.bread = 'German shaperd'
dog.getDogInfo = function(){
    return (`${this.name} is ${this.age} month old color: ${this.color}`)
}

/* console.log(dog)
console.log(dog.bark()) */
//console.log(dog.getDogInfo())
//console.log(Object.values(dog)) */

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    
}

/* let arrNums = [23, 24, 29, 21, 19]
let maxnum = arrNums[0]
for (let index = 0; index < arrNums.length; index++) {
    if(arrNums[index] > maxnum)
        maxnum = arrNums[index]
}  
console.log(maxnum)
  */
// Exercise Level 2 
// Q 1 
/* let keys = Object.keys(users)
let values = Object.values(users)
let indexx = 0
let skillMax  = values[0].skills.length

for (let index = 0; index < values.length; index++) {

    let current = values[index].skills.length
    if (current > skillMax) {
        skillMax = current
        indexx = index 
    }
    
}
console.log(keys[indexx],skillMax)
 */

 //Q 2 Count logged in users,count users having greater than equal to 50 points from the following object.

/* let keys = Object.keys(users)
let values = Object.values(users)
let index = 0
let countLog = 0
let userPoints = 0

 for (let index = 0; index < values.length; index++) {
     if(values[index].isLoggedIn === true)
     countLog += 1
 }

console.log('Logged in user ', countLog)
for (let index = 0; index < values.length; index++) {
    if(values[index].points >= 50)
    userPoints += 1
}
console.log('Users with 50 points  and more ', userPoints) */

//Q 3 count Mern 

/* let keys = Object.keys(users)
let values = Object.values(users)
let index = 0
let countMern = 0
let arrayUsers = []

for (let index = 0; index < values.length; index++) {
    let mern = 'ExpressMongoDBNodeReact'
    let userMern = ''
    let skillsArray = values[index].skills.sort()
    for (let i = 0; i < skillsArray.length; i++) {
       if(mern.includes(skillsArray[i]))
        userMern += (skillsArray[i])
    } 
    if(mern === userMern)
    arrayUsers.push(keys[index])
    
}
console.log(arrayUsers) */
// Q 4 Set your name in the users object without modifying the original users object
/* let Abdu = {
    email:'abdu@gmail.com',
    skills:['HTML', 'CSS','JavaScript','Electronics','MongoDB'],
    age:23,
    isLoggedIn:true,
    points:50
}

users.Abdu = {
    email: 'abdu@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Electronics', 'MongoDB'],
    age: 23,
    isLoggedIn: true,
    points: 50
}
console.log(users) */

//Q 5 Get all keys or properties of users object
// Q 5 , 6  7do it 
// Level 3
//Q 1 

/* const personAccount = {
    fname:'Abdu',
    lName:'Yusuf',
    incomes:{
        dailyIncom:1000,
        weeklyIncom:1800,
        monthSalary:3000000,
        salesIncome:30000000
    },
    expenses:{
        dailyExpense:1200,
        weeklyExpense:300,
        monthExpense:121212
    },
    totalIncome: function () { 
        let totalInc = Object.values(this.incomes).reduce((a,b) => a + b)
        return totalInc
    },
    totalExpense: function(){
        let totalEx = Object.values(this.expenses).reduce((a, b) => a + b)
        return totalEx    
    },
    accountInfo : function (){
        return this.fname + ' ' + this.lName
    },
    addIncome : function (namee, incomee){
        this.incomes[namee] = incomee
    },
    addExpense : function(name, expense){
        this.expenses[name] = expense
    },
    accountBalance : function(){
        return this.totalIncome() - this.totalExpense()
    }

}




personAccount.addIncome('bonus', 200000000)
personAccount.addExpense('sedeqa', 200000000)

console.log(personAccount.totalExpense())
console.log(personAccount.totalIncome())
console.log(personAccount.accountBalance())

console.log(personAccount) */

//Q 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]