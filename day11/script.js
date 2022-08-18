var x = document.getElementsByClassName("mole");
var y = document.getElementsByClassName("dirt");
var btn = document.getElementById("start")

var count=0;
console.log(x);
document.getElementById("pointtext").style.visibility = "hidden";
document.getElementById("currentPoint").style.visibility = "hidden";
function start(){
    for(var i=0;i<x.length;i++)
    {
        x[i].style.visibility = "hidden";
        
        y[i].style.visibility="visible";
    }
    function rat(){
        
        num = Math.floor(Math.random() * 7);
        x[num].style.visibility = "visible";
        x[num].onclick = counter;

        function hidden(){
            x[num].style.visibility = "hidden";
        }
        setTimeout(hidden,900);
    }


    btn.style.visibility= "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("mole").style.visibility = "hidden";
    document.getElementById("mud").style.visibility = "hidden";
    document.getElementById("pointtext").style.visibility = "visible";
document.getElementById("currentPoint").style.visibility = "visible";
   

    setInterval(rat, 1000)
    
}
function counter(){
    count++;
    var x=document.getElementById("currentPoint");
    x.innerText=" "+count;
}