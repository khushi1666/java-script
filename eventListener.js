// let btn=document.createElement("button");
// btn.innerText="click me";
// document.body.append(btn);
// btn.addEventListener("mouseout",function(event){
//     btn.title="Button";
//     btn.innerText="working";
    
//     let str = prompt("what color you would like to have a button");
//     btn.style.color=str;

// });
// //keypress event
// let p=document.createElement("p");
// let input=document.createElement("input");
// input.setAttribute("placeholder","write here something");
// document.querySelector("body").append(p);
// document.querySelector("body").append(input);
// input.addEventListener("keypress",function(event){
//     p.innerText+="you pressed ="+event.key+"  ";
// });
// //onscroll event
// let x=0;
// let div=document.createElement("div");
// let p2=document.createElement("p");
// let h5=document.createElement("h5");
// p2.innerText="There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.";
// div.append(p2); 
// div.style.height = "100px";
// div.style.width = "100px";
// div.style.border = "2px solid black";
// div.style.overflow="scroll";
// document.querySelector("body").append(div);
// document.querySelector("body").append(h5);
// div.addEventListener("scroll",function(event){
//     x++;
//     h5.innerText=" you Scrolled : "+ x;
    
// });

// //by chatgpt
// let x = 0;

// let div = document.createElement("div");
// let p2 = document.createElement("p");
// let h5 = document.createElement("h5");

// p2.innerText = "There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.";

// div.append(p2);

// div.style.height = "100px";
// div.style.width = "100px";
// div.style.border = "2px solid black";
// div.style.overflow = "scroll";

// document.body.append(div);
// document.body.append(h5);

// div.addEventListener("scroll", function () {
//     x++;
//     h5.innerText = "You Scrolled : " + x;
// });

let img = document.createElement("img");
img.src="https://up.yimg.com/ib/th/id/OIP.BrzOWzRDPDyTxaU9c6xKvQHaFu?pid=Api&rs=1&c=1&qlt=95&w=156&h=120";
document.body.append(img);
let p3=document.createElement("p3");
document.body.append(p3);
img.addEventListener("load",function(){
    p3.innerText="image is successfully loaded";
});
img.addEventListener("error", function () {
    p3.innerText = "Image failed to load.";
});