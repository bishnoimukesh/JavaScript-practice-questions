let btn = document.querySelector('#create');
let output = document.querySelector('#output');

btn.addEventListener('click', () =>{
    console.log('ok');
    output.innerHTML += `<div style="background-color:#000">${output}</div>`
})