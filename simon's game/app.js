let gameSeq=[];
let userseq=[];

let btns=["yellow","red" ,"blue","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
} 

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3)+ 1;
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    gameSeq.push(randcolor);
    gameFlash(randbtn);
}


function checkans(idx){
     

    if(userseq[idx]===gameSeq[idx]){
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset ();
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}