let count=0;

document.getElementById("decrease").onclick=function(){
    count-=1;
    Number(count);
    document.getElementById("mainscreen").innerHTML=count;
}

document.getElementById("reset").onclick=function(){
    count=0;
    Number(count);
    document.getElementById("mainscreen").innerHTML=count;
}

document.getElementById("increase").onclick=function(){
    count+=1;
    Number(count);
    document.getElementById("mainscreen").innerHTML=count;
}