let input = document.querySelector("#input");
let price = document.querySelector("#price");
let cp = document.querySelector("#cp");

let url = "https://stock-api.desaihetav.repl.co/current-price/RELIANCE";

price.addEventListener("click", () => {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        output.innerHTML = data.current_price;
        if(data.current_price < parseInt(cp.value)){
            output.innerHTML = data.current_price - cp.value;
            // console.log('less')
            // output.innerHTML = 'Profit'
            output.style.color = 'green'
        }else{
            output.innerHTML = data.current_price - cp.value;

            // output.innerHTML = 'Loss'
            output.style.color = 'red'
            // console.log('profit')
        }

    });
});
