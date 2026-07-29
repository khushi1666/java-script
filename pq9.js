let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText="Click Me";
input.classList.add("red");
btn.classList.add("red");
document.querySelector("body").append(input);
document.querySelector("body").append(btn);
//2nd question
btn.setAttribute("id","button");
input.setAttribute("placeholder","userName");
//3rd question
let bu=document.querySelector("#button");
// bu.computedStyleMap.color="blue";
// bu.computedStyleMap.backgroundcolor="white";
bu.classList.add("btn");
//create h1 element
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM PRACTICE</u>";
document.querySelector("body").append(h1);
//create a p tag on the page 
let p = document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.body.append(p);
