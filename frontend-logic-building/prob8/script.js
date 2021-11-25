let compareBtn = document.querySelector("#compare");
let output = document.querySelector("#output");

var ram = {
    name: " ram",
    age: "25",
    yuga: " Treta ",
}
var krishna = {
    name: " Krishna ",
    age: "19",
    yuga: " Dwapar ",
}

compareBtn.addEventListener('click', ()=>{
    output.style.color = "red"
    if (ram.age < krishna.age) {
        output.innerText = "Krishna is Powerful"
    } else {
        output.innerText = "Ram is Powerful"
    }
})