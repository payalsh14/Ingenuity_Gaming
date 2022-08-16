function fun(s){
    if(s[0]!='N')
    {
        s="New!" + s;
        return s;
        
    }
    else if(s[1]!='E')
    {
        s="New!" + s;
        return s;
    }
    else if(s[2]!='W'){
        s="New!" + s;
        return s;
    }
    else
    {
        return s;
    }

}


var s = prompt("enter a string: ");
document.write(fun(s));
console.log(fun(s));