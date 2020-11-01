



document.querySelector('#button').addEventListener('click',()=>{
    let weight = document.getElementById('weight').value
    let planet = document.querySelector('#planets').value
    const name = document.querySelector(`select.planets option[value="${planet}"`).innerHTML;
 
    console.log(weight, planet)
    document.querySelector('#result').innerHTML = 'Your weight on' + name + ' ' +  (+weight * +planet)
})