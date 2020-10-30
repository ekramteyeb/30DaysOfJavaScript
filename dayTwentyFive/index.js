


let dataDiv = document.querySelector('.datas')
let countriesSorted = countries.sort(function(a,b){
    if(a.population < b.population) return 1
    if(a.population > b.population) return -1
    return 0
})
let totalPopulation = countries.reduce((a,b) => a + b.population,0)
console.log(Math.round((countries[0].population/ totalPopulation )* 100) + '%')

for (let index = 0; index < 10; index ++) {
    let div = document.createElement('div')
    let bar = document.createElement('div')
    let country = document.createElement('div')
    let population = countriesSorted[index].population
    let widthh = Math.round((population / totalPopulation) * 100)
    country.innerHTML = countriesSorted[index].name
    country.style.cssText = 'display:inline-block;width:100px;'
    div.style.cssText = 'padding:10px; margin:3px;text-align:left; font-size:10px;'
    bar.style.cssText = `background-color:red; width:${widthh}%;height:25px;display:inline-block;`
    //bar.style.width = `${widthh}%`
    
    
    div.append(country, bar,population)
    dataDiv.append(div)

}
