const ans=Math.floor((Math.random()*10)+1);

let guesses=0;

document.getElementById("submitbtn").onclick=function(){
    let guess=document.getElementById("guessbox").value;
    guesses+=1;

    if(guess==ans){
        alert(`${guess} is the correct guess.You took ${guesses} guesses.`);
    }
    else if(guess>ans){
        alert(`Too Large!`);
    }
    else if(guess<ans){
        alert(`Too Small!`);
    }

}