const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('step');
const myName = urlParams.get('nome');
const content = document.getElementById("content");

const p = document.createElement("p");
p.innerText = myParam
const p2 = document.createElement("p");
p2.innerText = myName
content.appendChild(p)
content.appendChild(p2)