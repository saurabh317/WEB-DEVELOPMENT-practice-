var targetc = document.querySelector(".container");
var targett = document.querySelector('.para');
 var count = 0;
targetc.addEventListener('click',function(){
    count++;
    console.log(count);
  
    targett.innerText = "Box clicked "+count+ " times";
    targett.style.t
});