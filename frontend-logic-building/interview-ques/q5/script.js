let btn = document.querySelector("#fetch");
let output = document.querySelector("#output");

btn.addEventListener("click", () => {
  fetch("https://dev.to/api/articles")
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((element) => {
        console.log(element);
        output.innerHTML += `<ol><li>${element.tag_list}</li></ol>`
      });
    });
});
