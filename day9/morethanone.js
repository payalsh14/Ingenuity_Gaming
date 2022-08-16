function fun(a,b){
    document.body.innerHTML="<h1> Sum Is: " + (a+b) + "<br> Subtraction : " + (a-b)+"</h1>";

    return {"val1":(a+b) , "val2": (a-b)};

}


console.log( fun(2,4));
