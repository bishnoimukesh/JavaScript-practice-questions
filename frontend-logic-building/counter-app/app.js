let btnInc = document.querySelector('#inc');
let btnDec = document.querySelector('#dec');
let output = document.querySelector('#output');

btnInc.addEventListener('click', ()=>{
  // console.log('inc');
  let currValue = parseInt(output.innerText);
  output.innerText = currValue + 1;
})

btnDec.addEventListener('click', ()=>{
  let currValue = parseInt(output.innerText);
  output.innerText = currValue - 1;
})