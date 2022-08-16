function fun(s){
    if(s.length<3){
        return s;
    }
    else{
        var str1="";
        var str2="";
        i=0; 
        j=s.length-3;
        while(i!=3 && j!=s.length){
            str1 = str1+s[i];
            str2 = str2+s[j];
            i++;
            j++;
        }
        return str1+str2;
    }

}



var input = prompt("enter a string");
document.write(fun(input));