let input = document.querySelector('#input');
let btn = document.querySelector('#check');

url = 'https://api.github.com/users/';
btn.addEventListener('click', ()=>{
  repos();
  user();
})

function user(){
  fetch(url + input.value)
  .then(response => response.json())
  .then(data => {
    output.innerHTML = `<h2>${data.name}</h2>  <hr>
    <img src="${data.avatar_url}" alt="Avatar_url"></img><br>
    <img id="icons" src="assets/users.png" alt="">
    Followers: ${data.followers}  Following: ${data.following}`;
  })
}

function repos(){
  fetch(url + input.value + "/repos")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => 
      output.innerHTML += `<img id="icons" src="assets/repo.png" alt="">
      ${element.name} <br>${element.created_at} 
      <br><img id="icons" src="assets/star.png" alt="">${element.forks_count}  
      <img id="icons" src="assets/fork.png" alt="">${element.stargazers_count} <br>
      `);
  })
}

