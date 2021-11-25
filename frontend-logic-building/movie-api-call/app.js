let yjhd = document.querySelector('#yjhd');
let znmd = document.querySelector('#znmd');
let output = document.querySelector('#output');

const URL = 'https://mock-practice.prakhar10v.repl.co/bollywood?name=';
const yjhdValue = yjhd.innerText;
const znmdValue = znmd.innerText;

function fetchAPI(text){
  fetch(URL + text)
  .then(response => response.json())
  .then(data => output.innerHTML = data.message)
}

yjhd.addEventListener('click', () => fetchAPI(yjhdValue));
znmd.addEventListener('click', () => fetchAPI(znmdValue));