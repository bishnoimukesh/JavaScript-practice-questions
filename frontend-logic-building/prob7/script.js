const inputPassword = document.querySelector("#input-password")
const button = document.querySelector("#check-btn")
const output = document.querySelector("#output")

button.disabled = true;
button.addEventListener("click", function passwordChecker() {
    if(inputPassword.value.length < 10){
        output.innerText = "Failed Password"
    }
    else {
        output.innerText = "Successful Password"
    }
})

inputPassword.addEventListener("input", function(){
    if(inputPassword.value.length < 10){
        inputPassword.style.border = "2px solid red"
        output.innerText = "Weak Password"
    }
    else {
        inputPassword.style.border = "2px solid green"
        output.innerText = "Strong Password"
        button.disabled = false;
    }
})