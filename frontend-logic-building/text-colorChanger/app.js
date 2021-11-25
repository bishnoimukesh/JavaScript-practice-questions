let input = document.querySelector('#text');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let yellow = document.querySelector('#yellow');
let output = document.querySelector('#output');

input.addEventListener('input', ()=>{
    output.innerText = input.value;
});

red.addEventListener('click', ()=>{
    output.style.color = 'red';
})
green.addEventListener('click', ()=>{
    output.style.color = 'green';
})
yellow.addEventListener('click', ()=>{
    output.style.color = 'yellow';
})

// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");
// const output = document.querySelector("#output");

// const colors = ['red', 'green', 'blue'];

// btn.addEventListener("click", clickHandler);

// function clickHandler() {
//   const inputValue = input.value;
//   output.innerText = inputValue;

//   colors.forEach((color) => {
//     if(inputValue.includes(color)) {
//       output.style.color = color;
//     }
//   })
  
// }