const validate = () => {

    /* document.querySelector('.fname p').textContent = ''
    document.querySelector('.lname p').textContent = ''
    document.querySelector('.email p').textContent = ''
    document.querySelector('.password p').textContent = ''
    document.querySelector('.telephone p').textContent = ''
    document.querySelector('.bio p').textContent = '' */
  
    let fname = document.myForm.fname.value
    let lname = document.myForm.lname.value
    let email = document.myForm.email.value
    let password = document.myForm.password.value
    let telephone = document.myForm.telephone.value
    let bio = document.myForm.bio.value

    //let pattern = /[A-Za-z]/g
    let fnpattern = /^[A-Ba-z0-9]{3,16}$/gi
    let lnpattern = /^[A-Ba-z0-9]{3,16}$/gi
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
    let passwordPattern = /^[A-Ba-z0-9-_@]{6,20}$/g
    let telephonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{5}$/g
    let bioPattern = /^[a-z-_]{8,50}$/g

    let fnameResult = fnpattern.test(fname)
    let lnameResult = lnpattern.test(lname)
    let emailResult = emailPattern.test(email)
    let passwordResult = passwordPattern.test(password)
    let telephoneResult = telephonePattern.test(telephone)
    let bioResult = bioPattern.test(bio)

    fnameResult ? '' : document.querySelector('.fname p').textContent = 'First name must be alpha numeric and contains 3-16 characters'
    lnameResult ? '' : document.querySelector('.lname p').textContent = 'Last name must be alpha numeric and contains 3-16 characters'
    emailResult ? '' : document.querySelector('.email p').textContent = 'Email must be a valid address ex. example@example.com'
    passwordResult ? '' : document.querySelector('.password p').textContent = 'Password must be alpha numerica (@ _ and - are allowed) and must be b/n 6 - 20 characters'
    telephoneResult ? '' : document.querySelector('.telephone p').textContent = 'A valid telephone number 11 digit and (333-333-33433)'
    bioResult ? '' : document.querySelector('.bio p').textContent = 'Bio must contain only lowercase latters, underscores, hyphens and must be 8-50 characters'
   
    if(fnameResult && lnameResult && emailResult && passwordResult && telephoneResult && bioResult){
        document.querySelectorAll('.form input').forEach(el => el.style.border = 'green 1px solid')
        document.querySelector('.submit').style.backgroundColor = 'green'
    }
}
//counter countes how many of the input element went well against the RegEx
let counter = 0
let decide = false
document.querySelector('.fname input').addEventListener('input', (e) => {
    document.querySelector('.fname p').textContent = ''
    let fnpattern = /^[A-Ba-z0-9]{3,16}$/gi
    let result = fnpattern.test(e.target.value)
    result ? '' : document.querySelector('.fname p').textContent = 'First name must be alpha numeric and contains 3-16 characters'
    if(result){
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    }else{
        e.target.style.border = 'orange 2px solid'
         decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.lname input').addEventListener('change', (e) => {
    document.querySelector('.lname p').textContent = ''
    let lnpattern = /^[A-Ba-z0-9]{3,16}$/gi
    let result = lnpattern.test(e.target.value)
    result ? '' : document.querySelector('.lname p').textContent = 'Last name must be alpha numeric and contains 3-16 characters'
    if (result){
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    }else{
         e.target.style.border = 'orange 2px solid'
         decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.email input').addEventListener('change', (e) => {
    document.querySelector('.email p').textContent = ''
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let result = pattern.test(e.target.value)
    result ? '' : document.querySelector('.email p').textContent = 'Email must be a valid address ex. example@example.com'
    if (result) {
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    } else {
        e.target.style.border = 'orange 2px solid'
        decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.password input').addEventListener('change', (e) => {
    document.querySelector('.password p').textContent = ''
    let pattern = /^[A-Ba-z0-9-_@]{6,20}$/g
    let result = pattern.test(e.target.value)
    result ? '' : document.querySelector('.password p').textContent = 'Password must be alpha numerica (@ _ and - are allowed) and must be b/n 6 - 20 characters'
    if (result) {
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    } else {
        e.target.style.border = 'orange 2px solid'
        decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.telephone input').addEventListener('change', (e) => {
    document.querySelector('.telephone p').textContent = ''
    let pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{5}$/g
    let result = pattern.test(e.target.value)
    result ? '' : document.querySelector('.telephone p').textContent = 'A valid telephone number 11 digit and (333-333-33433)'
    if (result) {
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    } else {
        e.target.style.border = 'orange 2px solid'
        decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.bio input').addEventListener('change', (e) => {
    document.querySelector('.bio p').textContent = ''
    let pattern = /^[a-z-_]{8,50}$/g
    let result = pattern.test(e.target.value)
    result ? '' : document.querySelector('.bio p').textContent = 'Bio must contain only lowercase latters, underscores, hyphens and must be 8-50 characters'
    if (result) {
        e.target.style.border = 'green 2px solid'
        counter += 1
        decide = true
    } else {
        e.target.style.border = 'orange 2px solid'
        decide = false
    }
    if (counter == 6 && decide) document.querySelector('.submit').style.backgroundColor = 'green'
})
document.querySelector('.submit').addEventListener('click', () => {
    validate()
    if(counter >= 6 && decide){
        alert('Form Succussfully sumbited')
        location.href = '/30DaysOfJavaScript/dayThirty/form'
        console.log(decide)
    }else{
        document.querySelector('.submit').style.backgroundColor = 'black'
        console.log(decide)
    }
})
console.log(counter)
//if (counter == 1 ) document.querySelector('.submit').style.backgroundColor = 'green'