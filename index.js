const myClock=document.getElementById("myLabel")


update();
setInterval(update,1000)
function update(){
    let date=new Date();
    myClock.innerHTML=format(date);

    function format(date){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let amorpm=hours>12 ? "Pm":"Am";

        hours=(hours%12) || 12;

        hours=formatZeros(hours);
        minutes=formatZeros(minutes);
        seconds=formatZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amorpm}`;
    }
}

function formatZeros(element){
    element=element.toString();
    return element.length<2 ? '0'+element:element;
}