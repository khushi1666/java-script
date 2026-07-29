 let btn=document.createElement("button");
btn.innerText="click me";
document.body.append(btn);
btn.addEventListener("click",function(event){
    // btn.title="Button";
    let str = prompt("what color you would like to have a button");
    btn.style.color=str;
});


let h3=document.createElement("h3");
let input=document.createElement("input");
input.setAttribute("placeholder","your name");
document.querySelector("body").append(h3);
document.querySelector("body").append(input);
input.addEventListener("keydown",function(event){
    h3.innerText ="you pressed ="+ event.key+"  ";
});


//by chatgpt
let input = document.createElement("input");
input.setAttribute("placeholder", "Enter your name");

let heading = document.createElement("h2");

document.body.append(input);
document.body.append(heading);

input.addEventListener("input", function () {
    let name = input.value.replace(/[^a-zA-Z ]/g, "");
    input.value = name;
    heading.innerText = name;
});