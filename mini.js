let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");
div.addEventListener("click",function(){
    console.log("div is clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();//this will prevent event listening bubbling means it prevent that if we  call event for child then it is also automatically call it's parent event listner...
    console.log("ul is clicked");
});
lis.addEventListener("click",function(){
    event.stopPropagation();
    console.log("lis is clicked");
})