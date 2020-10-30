let qualifydiv = document.createElement('div')

qualifydiv.append('Qualifications')

for (const iterator of asabe.author.qualifications) {
    let li = document.createElement('li')
    li.textContent = iterator
    qualifydiv.append(li)
}

qualifydiv.style.cssText = 'border:1px solid green; width:30%; text-align:left; list-style:none; float:left; padding:10px; margin-top:10px;'
