const choicebtns=document.querySelectorAll(".choicebtn");
const playertxt=document.querySelector("#playerText");
const comptxt=document.querySelector("#computerText");
const resulttxt=document.querySelector("#resultText");

let player;
let comp;
let result;

choicebtns.forEach(button=>button.addEventListener("click", ()=>{
    player=button.textContent;
    computerturn();
    playertxt.textContent=`Player : ${player}`;
    comptxt.textContent=`Computer : ${comp}`;
    resulttxt.textContent=checkWinner();
}));

function computerturn(){
    const num=Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            comp="Rock";
            break;
        case 2:
            comp="Paper";
            break;
        case 3:
            comp="Scissors";
            break;
    }
}

function checkWinner(){
    if(player==comp){
        return "Draw!";
    }
    else if(player=="Rock"){
        return comp=="Scissors" ? "Result : Player Wins!":"Result : Computer Wins!";
    }
    else if(player=="Paper"){
        return comp=="Rock" ? "Result : Player Wins!":"Result : Computer Wins!";
    }
    else if(player=="Scissors"){
        return comp=="Paper" ? "Result : Player Wins!":"Result : Computer Wins!";
    }
}