let gameSeq=[];
let userSeq=[];

let btnCol=["red","green","blue","yellow"];

let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("working");
        started=true;
    }
    levelUp();
});
function flashButton(btn){          //use of this function to create a flash
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}
let h2 = document.querySelector("h2");
function levelUp(){
    userSeq=[];
    level++;
    //console.log(level);
    h2.innerText=`level:${level}`;//h2 mai level status dekh sakhte hai
    //random button choose karne wala logic
    let randIdx=Math.floor(Math.random()*4);//can do console.log(randIdx) and also print randColor and randBtn
    let randColor=btnCol[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);   //mark this we select first that particular button and then apply what we want
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashButton(randBtn);

};

function userflashButton(btn){          //use of this function to create a flash
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },200);
}

function checkAns(idx){
   // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp(),200); 
        }
    }
    else{
        h2.innerHTML=`Game Over!Your score is <b>   ${level}</b><br>Press any key to continue again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }
}

function btnpress(){
    let btn=this;           //mark this with focus
    //console.log("button pressed");
    userflashButton(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
      console.log(userSeq);
    checkAns(userSeq.length-1);
}
//for tracking the button which user was pressed
let buttons=document.querySelectorAll(".but");
for(btn of buttons){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}