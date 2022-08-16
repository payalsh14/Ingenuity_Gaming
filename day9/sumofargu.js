// function adder(num) {
//   if(num==0){
//     return num;
//     }

//     else{
//       adder(Number(prompt("enter the numbers: ")));
//       for (let i = 1; i < arguments.length; i++) {
//       num += Number(arguments[i]);
      
//     }
//   }
//   return num;

  
   
// }
//   var num=Number();
//   document.write(adder(num));

  function adder(base) {
    base = Number(base);
    for (let i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
  }


  // var base = window.adder.apply(window,bar.split(','));
  document.write(adder(base));
  // console.log(adder(2,3)); //5 
  // console.log(adder(1,2,3,4,5)); //15
