let input = document.querySelectorAll(".input");
let btns = document.querySelectorAll(".btns");
let output = document.querySelector("#output");

// console.log(btns, typeof(btns));

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.textContent === "+"){
            output.innerText = (Number(input[0].value) + Number(input[1].value));
        }   
        else if(btn.textContent === "-"){
            output.innerText = (Number(input[0].value) - Number(input[1].value));
        }   
        else if(btn.textContent === "x"){
            output.innerText = (Number(input[0].value) * Number(input[1].value));
        }   
        else if(btn.textContent === "/"){
            output.innerText = (Number(input[0].value) / Number(input[1].value));
        }   
    })
})