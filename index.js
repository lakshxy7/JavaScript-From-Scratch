
 let count=0

const counter = document.getElementById("counter");
const increasebt=document.getElementById("inc")
const decreasebt=document.getElementById("dec")
const reset=document.getElementById("reset")
counter.textContent=count;

increasebt.onclick=function(){
  count = count + 1;
 counter.textContent = count;  

};

decreasebt.onclick=function(){
  count = count -1;
 counter.textContent = count;  

}

reset.onclick=function(){
 count=0;
counter.textContent=count;

}
