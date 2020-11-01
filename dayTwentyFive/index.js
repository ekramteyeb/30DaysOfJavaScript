


let dataDiv = document.querySelector('.datas')
document.querySelector('.title h5 span').innerHTML = countries.length

//handles click to population button
const populationFunc = () => {

        dataDiv.innerHTML = ''
        document.querySelector('.buttons p').innerHTML = ''
        document.querySelector('.buttons p').innerHTML = '10 Most populated countries in the wolrd'
        let countriesSorted = countries.sort(function (a, b) {
            if (a.population < b.population) return 1
            if (a.population > b.population) return -1
            return 0
        })
    let totalPopulation = countries.reduce((a, b) => a + b.population,0)



        for (let index = 0; index < 10; index++) {
            let div = document.createElement('div')
            let bar = document.createElement('div')
            let barDiv = document.createElement('div')
            barDiv.style.cssText = 'width:75%; display:inline-block;'
            barDiv.appendChild(bar)
            let populationDiv = document.createElement('div')
            populationDiv.style.cssText = 'float:right;'
            let country = document.createElement('div')
            let population = countriesSorted[index].population
            populationDiv.append(population.toLocaleString())


            let widthh = Math.round((population / totalPopulation) * 100)
            country.innerHTML = countriesSorted[index].name
            country.style.cssText = 'display:inline-block;width:100px;'
            div.style.cssText = ' margin:3px;text-align:left; font-size:10px;'
            bar.style.cssText = `background-color:#F2A93B; width:${widthh}%;height:25px;display:inline-block;`
            //bar.style.width = `${widthh}%`
            if (index == 0) {
                let c = document.createElement('div')
                c.innerHTML = 'World'
                c.style.cssText = 'display:inline-block;width:100px; margin-bottom:4px;'

                let b = document.createElement('div')
                let bdiv = document.createElement('div')

                bdiv.style.cssText = 'width: 75%; display:inline-block;'
                b.style.cssText = `background-color:#F2A93B; width:${100}%;height:25px;display:inline-block;`
                bdiv.append(b)
                let p = document.createElement('div')
                p.style.cssText = 'float:right;'
                p.append(totalPopulation.toLocaleString())

                div.append(c, bdiv, p)
            }
            div.append(country, barDiv, populationDiv)
            dataDiv.append(div)

        }

}
//displays population graph when population button is clicked
document.querySelector('.populations').addEventListener('click', populationFunc)
//display population graph when the page loads
populationFunc()

//handles click on  Languages  button
document.querySelector('.languages').addEventListener('click', () => {

    dataDiv.innerHTML = ''
    document.querySelector('.buttons p').innerHTML = ''
    document.querySelector('.buttons p').innerHTML = '10 Most spoken languages in the world'
   
    let allLanguages = []
    countries.forEach(country => allLanguages.push(...country.languages))

    let languageSet = new Set (allLanguages)

    let count = 0
    let languagesAndCount = []

    for (const language of languageSet) {
        count = allLanguages.filter(lang => lang === language).length
        languagesAndCount.push({count,language})
    }
    let sortedAllLanguages = languagesAndCount.sort((a,b) => {
        if(a.count < b.count) return 1
        if(a.count > b.count) return -1
        return 0
        
    })
    

    for (let index = 0; index < 10; index++) {
        let div = document.createElement('div')
        let bar = document.createElement('div')
        let barDiv = document.createElement('div')
        barDiv.style.cssText = 'width: 71%; display:inline-block;'
        barDiv.appendChild(bar)
        let countDiv = document.createElement('div')
        countDiv.style.cssText = 'float:right;'
        let language = document.createElement('div')
        let count = sortedAllLanguages[index].count
        countDiv.append(count)


        let widthh = Math.round((count / sortedAllLanguages.length) * 100)
        language.innerHTML = sortedAllLanguages[index].language
        language.style.cssText = 'display:inline-block;width:100px;'
        div.style.cssText = 'margin:3px;text-align:left; font-size:10px;'
        bar.style.cssText = `background-color:#F2A93B; width:${widthh}%;height:25px;display:inline-block;`
        
        div.append(language, barDiv, countDiv)
        dataDiv.append(div)

    }

})