const subscribebtn= document.getElementById("cbox1");
const visaBtn= document.getElementById("visa");
const mastercardBtn= document.getElementById("mastercard");
const paypalBtn= document.getElementById("paypal");
const mysubmit= document.getElementById("mysubmit");
const subResult= document.getElementById("subResult");
const payResult= document.getElementById("payResult");



mysubmit.onclick= function(){

if(subscribebtn.checked){
    subResult.textContent=`you are subscribed`;

}
else
{   subResult.textContent=`you are not subscribed`;  }

if(visaBtn.checked){
    payResult.textContent=`you'll pay using visa?`;

}
else if(mastercardBtn.checked){
 payResult.textContent=`you'll pay using master card?`;
}
else if(paypalBtn.checked){
 payResult.textContent=`you'll pay using paypal?`;
}
else{

   payResult.textContent=`please select a payment method`;  
}




}



//<input type="radio"  id="paypal"  name="card">
//<label for="paypal">Paypal</label>  <br> <br>
// with using for we can allow selection of radio button by clicking on text box
//checked is used in radio and checkboxes to check if they are checked or not it gives a boolean output