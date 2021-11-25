let inputTxt = document.querySelector("#input-txt");
let submitBtn = document.querySelector("#submit");
let outputTxt = document.querySelector("#output");

const URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="


function fetchAPI(text) {
  fetch(URL + text)
    .then(Response => Response.json())
    .then(
      data => {
      outputTxt.innerText = `${data.contents.translated} ${(data.contents.text).toUpperCase()}`
    });
};

submitBtn.addEventListener("click", function(){
  fetchAPI(inputTxt.value);
});

// let btn = document.querySelector('#fetch');
// let output = document.querySelector('#output');

// URL = 'https://jsonplaceholder.typicode.com/todos';


// btn.addEventListener('click', () => {
//   fetch(URL)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach((elements) =>{
//     // console.log(data)
//     output.innerHTML += `<li>${elements.userId} ${elements.id} ${elements.title} </li>`
//   })
// })
// })
