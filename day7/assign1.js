var x=Math.floor(Math.random()*10);

var count=4;

while(count>=0){
    var a=Number(prompt("Guess the number :"));
    if(a==x){
        alert("Hurray!!  You guessed it correct");
        alert("The number was" +x+ "!");
        break;
    }

    alert(`you have ${count} left.`);
    count--;

}
if(count<0){
    alert("The number was" +x+ "!");
    document.body.style.backgroundColor="black";
    document.body.style.color="aqua";
    document.body.style.fontSize="40px";
    document.body.style.fontFamily="cursive";
    document.write("Oops! Better luck next time");
}
