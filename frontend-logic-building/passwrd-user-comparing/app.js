let inputUser = document.querySelector('#user1');
let inputPass = document.querySelector('#user2');
let btn = document.querySelector('#check');
let output = document.querySelector('#output');

btn.addEventListener('click', ()=>{
  // console.log(inputPass.value.includes(inputUser.value))
  if(inputPass.value.includes(inputUser.value)){
  // console.log('ok')
    output.innerHTML = 'Usrename cannot be used in password'
  }else{
  // console.log('not ok')
    output.innerHTML = 'everything is ok'
  }
})

