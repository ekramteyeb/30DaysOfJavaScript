

let  players = []

document.querySelector('.btnaddplayer').addEventListener('click', ()=>{
    
    let error = ' '
    let fname = document.querySelector('.fname').value
    let lname = document.querySelector('.lname').value
    let country = document.querySelector('.country').value
    let score = document.querySelector('.score').value

    if (fname === '' || lname === '' || country === '' || score === '') {
        error = 'All fields are required'
        document.querySelector('.error').innerHTML = error 
        return 
    } else{
        document.querySelector('.error').innerHTML = ''
    }

    let player = {
        fname : fname,
        lname : lname,
        country: country,
        score: +score,
        increase: function(){
            this.score += 5 
        },
        decrease: function () {
            this.score -= 5
        }
    }
    players.push(player)
   
    //player.increase()
    
   /* console.log(players[0].score)
   console.log(players) */
    displayAllPlayers(players)
})

function displayAllPlayers (array){

    let holderDiv = document.querySelector('.results')
    holderDiv.innerHTML = ''
    //sort the array first 

   array =  array.sort((a,b) => {
       if(a.fname.toLowerCase() > b.fname.toLowerCase()) return 1
       if(a.fname.toLowerCase() < b.fname.toLowerCase()) return -1
       return 0

   })
    
    array.forEach(element => {

        let div = document.createElement('div')

        let name = document.createElement('div')
        let country = document.createElement('div')
        let score = document.createElement('div')
        let createdTime = document.createElement('small')
        

        name.textContent = element.fname + ' ' + element.lname + ''
        name.setAttribute('class', 'name')
        createdTime.textContent = new Date().toDateString()
        createdTime.style.cssText = 'display:block; padding-top:10px; font-size:10px; filter:blur(0.5px);'
        name.append(createdTime)
        country.textContent = element.country
        score.textContent = element.score

        let editors = document.createElement('div')
        let delet = document.createElement('button')
        let plus = document.createElement('button')
        let minus = document.createElement('button')

        delet.innerHTML = '<i style="color:red" class="fa fa-trash"></i>'
        plus.innerHTML = '+5'
        minus.innerHTML = '-5'

        delet.addEventListener('click', (e) => {
           
           // let findName = e.path[3].childNodes[0].innerHTML.split(' ')
            let findName = e.path[3].childNodes[0].innerText.split(' ')
           // console.log(findName[1].split('\n'))
            players = players.filter(function(player){
                
                let lastName = player.lname
                if(player.fname === findName[0] && player.lname === findName[1].split('\n')[0]){
                    return 
                }else{
                    return player
                } 
            })
           
            displayAllPlayers(players)
    
        })
        plus.addEventListener('click', (e) => {
             element.increase()
            displayAllPlayers(players)
        })
        minus.addEventListener('click', (e) => {
            element.decrease()
            displayAllPlayers(players)
        })
        
        editors.append(delet,plus,minus)
       
        div.append(name ,country, score,editors)
        div.style.cssText = 'padding:10px; background-color:#E5C9C5; margin:15px;'
        holderDiv.append(div)
       
    })
    
}

displayAllPlayers(players)