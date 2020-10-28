// Level 1 
//Q 1 

class Animal {
    constructor(name,age,color,legs,giveBirth){
        this.name = name,
        this.age = age, 
        this.color = color,
        this.legs = legs,
        this.giveBirth = false
    }
    canMakeSound(){
        return this.name + ' makes sound'
    }
    
    set canGiveBirth (giveBirth){
        this.giveBirth = giveBirth
    }
    get getInfo(){
        return `${this.name} is ${this.age} years old  has a color of ${this.color}. Give birth ? ${this.giveBirth}`
    }
   
}

const animal1 = new Animal('boby',3,'red',4,true)

   console.log( animal1.canMakeSound())
   console.log(animal1.getInfo)

class Dog extends Animal{
    canMakeSound(){
        return this.name + ' can bark'
    }
}

const dog = new Dog('buchi', 4,'bure', 4)
dog.giveBirth = true

 //console.log(dog.getInfo)
//console.log(dog)
console.log(dog.canMakeSound())
 

//Level 3 
// 1 

class Statistics{

    constructor(ages){
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    }
    sorted() { return this.ages.sort() }
    count() { return this.ages.length }
    sum() { return this.ages.reduce((a, b) => a + b) }
    min () { return this.ages.reduce((a, b) => a > b ? b : a) }
    max() { return this.ages.reduce((a, b) => a > b ? a : b) }
    range() { return this.max() - this.min() }
    mean(){ return Math.round(this.sum() / this.count()) }
    median() { return this.count % 2 === 0 ? (this.ages.sort()[(this.count() / 2) - 1] + this.ages.sort()[this.count() / 2]) / 2 : this.ages.sort()[Math.floor(this.count() / 2)] }
    mode() {
    let object = {}, count = 0, mode, currentValue;
    for (let i = 0; i < this.sorted().length; i++) {
        currentValue = this.sorted()[i];
        object.hasOwnProperty(currentValue) ? ++object[currentValue] : object[currentValue] = 1;
        if (object[currentValue] > count) count = object[currentValue], mode = currentValue;
    }
    return { mode, count };
    }
    var(){
    return this.sorted().reduce((a, b, index, arr) => (a + (Math.pow((b - this.mean()), 2)) / this.count()), 0).toFixed(1)
    }
    std() {
    return Math.sqrt(this.sorted().reduce((a, b, index, arr) => (a + (Math.pow((b - this.mean()), 2)) / this.count()), 0)).toFixed(1)
    //return Math.sqrt(this.var()).toFixed(1)
    }
    freqDist() {
    return this.sorted().map(element => [element, this.sorted().filter(el => el === element).length])
    }

    describe() {
    return `
        Count: ${this.count()}
        Sum:  ${this.sum()}
        Min:  ${this.min()}
        Max:  ${this.max()}
        Range:  ${this.range()}
        Mean:  ${this.mean()}
        Median:  ${this.median()}
        Mode:  (${this.mode().mode}, ${this.mode().count})
        Variance:  ${this.var()}
        Standard Deviation:  ${this.std()}`
    }
}

const stat1 = new Statistics()
//console.log(stat1.describe())


