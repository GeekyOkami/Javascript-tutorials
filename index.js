let a;
let b;
let c;

document.getElementById("submitbutton").onclick=function(){
    a=document.getElementById("textboxA").value;
    Number(a);
    b=document.getElementById("textboxB").value;
    Number(b);

    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("labelC").innerHTML= "Side C:"+c;

}