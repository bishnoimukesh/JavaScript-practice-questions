let input = document.querySelector('#pass');
let btn = document.querySelector('#check');
let output = document.querySelector('#output');

btn.disabled = true;
input.addEventListener('input', function checkLength(){
  if (input.value.length < 10){
    btn.disabled = false;
  }else{
    btn.disabled = true
  }
})
btn.addEventListener('click', ()=>{
  if (input.value.length < 10){
    output.innerHTML = 'Success'
  }
})