const minNum = 1;
const maxNum = 50;
let attempt = 0;
const display=document.getElementById("display");
let submitGuess= document.getElementById("mySubmit");
let randomNum= Math.floor(Math.random()*(maxNum-minNum+1));
console.log(randomNum);





submitGuess.onclick=function(){

let guess=Number(document.getElementById("myText").value);
console.log(typeof guess, guess);
if (isNaN(guess)) {
alert("enter a valid number");
}
else{



 
if(guess==randomNum){
attempt++;
display.textContent=`hurray you won in ${attempt} attempts`;
guess==0;
 }

  else  if(guess<minNum|| guess>maxNum){
attempt++;

display.textContent=`invalid enter a valid number`;

 }
else  if(guess>=randomNum){
attempt++;
display.textContent=`it is greater then actual num`;

 }
else  if(guess<=randomNum){
attempt++;
display.textContent=`it is smaller then actual num`;

 }





}






}
