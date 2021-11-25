let fetchApi = document.querySelector("#call-api");
let output = document.querySelector("#output");

URL = "https://reqres.in/api/users/23";

fetchApi.addEventListener('click', ()=> {
    fetch(URL)
    .then(error => {
        if (error.status === 404) {
            output.innerText = `${error.status} : Page not found`
        }
        else if (error.status === 401) {
            output.innerText = `${error.status} : Authentication failed`
        }
    })
})
// btn.addEventListener('click', ()=>{
//     fetch(URL)
//     // .then(res => res.json())
//     .then(error => {
//       if(error.status === 401){
//         output.innerText = 'User not logged in'
//       }
//       else if(error.status === 404){
//         output.innerText =  'Page not found'
//       }
//       else{
//         output.innerText =  'API is working'
//       }
//     })
//   })