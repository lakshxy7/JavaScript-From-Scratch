



function rollDice(){

const diceCount=document.getElementById("input-bar").value;
const diceResult=document.getElementById("diceResult");
const diceImages=document.getElementById("diceImages");
const values=[];
const images=[];

if (isNaN(diceCount) || diceCount === "") 
    {
alert("enter a valid number");
  }
  else if(diceCount <= "0"){

    alert("enter some number greater than 0");
  }
  else{
for(let i=1;i<=diceCount;i++)
{
const value=Math.ceil(Math.random()*6);
console.log(value) ;
values.push(value);
images.push(`<img src="assets/${value}.png">`)
}
diceResult.innerHTML=`<p>dice:  ${values.join(',')}</p>`;

diceImages.innerHTML=`${images.join('')}`;


console.log(values) ;




   
  }

}