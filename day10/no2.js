var numbers = [8,27,64,125,216]; 

var cuberoot = [];

for(let i=0;i<numbers.length;i++){
    cuberoot.push(Math.cbrt(numbers[i]));
}
for (var i in cuberoot) 
{
   document.write(cuberoot[i]);
}