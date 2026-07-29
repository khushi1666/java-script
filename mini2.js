let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    input.value="";
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    item.appendChild(delBtn);
    delBtn.classList.add("delete");
});
//event delegation

ul.addEventListener("click",function(event){
//    console.dir(event.target);
    // let itempar=event.target.parentElement;           //just for exploring purpose
//    console.log(itempar);
    if(event.target.nodeName =="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
});

//if i click button then cursor goes in input element
btn.addEventListener("click",()=>{
    input.focus();
});


//code with error delegation
// let delbtn=document.getElementsByClassName("delete");
// for(del of delbtn){
//     delbtn.addEventListener("click",function(){
//         console.log("deleted");
        // let par=this.parentElement;
        // console.log(par);
//         // par.remove();
// });
// }
