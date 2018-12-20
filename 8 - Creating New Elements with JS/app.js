


const input = document.getElementById("input");

const button = document.getElementById("submit");

button.addEventListener ("click", () => {

let listItem = document.createElement("li");
listItem.textContent = input.value;
let list = document.getElementsByTagName('ul')[0];
list.appendChild(listItem);
})

