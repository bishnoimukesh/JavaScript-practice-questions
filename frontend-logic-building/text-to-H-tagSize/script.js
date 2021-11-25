let inputTxt = document.querySelector("#input-txt");
let h1Btn = document.querySelector("#h1btn");
let h6Btn = document.querySelector("#h2btn");
let h3Btn = document.querySelector("#h3btn");
let output = document.querySelector("#output");

inputTxt.addEventListener('input', ()=>{
  output.innerText = input.value;
});

h1Btn.addEventListener('click', ()=>{
  output.innerHTML = (`<h1>${inputTxt.value}</h1>`);
})
h3Btn.addEventListener('click', ()=>{
  output.innerHTML = (`<h3>${inputTxt.value}</h3>`);
})
h6Btn.addEventListener('click', ()=>{
  output.innerHTML = (`<h6>${inputTxt.value}</h6>`);
})

// let input = document.querySelector("#input");
// let btns = document.querySelectorAll(".btns");
// let output = document.querySelector("#output");

// input.addEventListener('input', () => output.innerHTML =`${input.value}`);

// btns.forEach((btn)=>{
//     btn.addEventListener('click', () =>{
//         if (btn.textContent === "h1"){
//             output.innerHTML = `<h1>${input.value}</h1>`
//         }
//         if (btn.textContent === "h3"){
//             output.innerHTML = `<h3>${input.value}</h3>`
//         }
//         if (btn.textContent === "h6"){
//             output.innerHTML = `<h6>${input.value}</h6>`
//         }
//     })
// })