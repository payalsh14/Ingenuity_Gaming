let red =0
let yellow =0
let blue =0

// red.onclick = function(){
//     console.log('u clicked red');
// }
// yellow.onclick = function(){
//     console.log('u clicked yellow');
// }
// blue.onclick = function(){
//     console.log('u clicked blue');
// }

// const timesclicked = {'red':0 ,'yellow':0,'blue':0};
const squares = document.querySelectorAll('.colorsquare');
squares.forEach(square => {
    // square.onclick = () => {
    //     timesclicked[square.value]+=1;
    //     square.innerHTML=timesclicked[square.value];
    // }
    square.onclick = () => {
        if(square.value =='red'){
            red++;
            square.innerHTML=red;
        }
        if(square.value =='yellow'){
            yellow++;
            square.innerHTML=yellow;
        }
        if(square.value =='blue'){
            blue++;
            square.innerHTML=blue;
        }
    }

    
});
function clearscore(){
    red=0;
    yellow=0;
    blue=0;
    squares.forEach(square=>{
        square.innerHTML="";
    });
}
const clearbtn = document.getElementById('clearbtn');
clearbtn.onclick = clearscore();