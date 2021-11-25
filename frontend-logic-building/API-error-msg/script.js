let callApi = document.querySelector("#call-api");
let output = document.querySelector("#output");

let URL = "https://unitube-server.herokuapp.com/playlists";

callApi.addEventListener('click', ()=>{
    // output.innerText = '';
    fetch(URL)    
    .then(response => response.json())
    .then(json => output.innerText = `Error Message: ${json.message}`)
    .catch(error => console.log(error))   
    });