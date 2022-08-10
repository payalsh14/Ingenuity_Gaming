var sum=0;

while(1)
{
    var num= Number(prompt("Enter a number :"));
    if(num>0){
        sum=sum+num;
    }
    else
    {
        break;
    }
}
document.body.style.backgroundColor="black";
document.body.style.color="aqua";
document.body.style.fontSize="40px";
document.body.style.fontFamily="cursive";
document.write("The sum of the entered numbers is:  " +sum+ "");