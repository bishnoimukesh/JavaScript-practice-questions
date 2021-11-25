let user = document.querySelector('#name');
let btn = document.querySelector('#check');
let output = document.querySelector('#output');
let otp = document.querySelector('#otp');
let btnValidate = document.querySelector('#validate');

URL = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name=';

btn.addEventListener('click', () => {
  fetch(URL + user.value)  
  .then(response => response.json())
  .then(data => {
    console.log(data.otp)
    output.innerHTML = data.otp})
})

btnValidate.addEventListener('click', () => {
  if(output.innerHTML == otp.value){
    output.innerHTML = 'success'
  }else{
    output.innerHTML = 'fail'
  }
})

