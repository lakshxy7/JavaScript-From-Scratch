const submitPressed = document.getElementById("submitTemp");
const enteredTemp = document.getElementById("inputTemp");
const display = document.getElementById("displayTemp");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");

submitPressed.onclick = function(){

  let givenTemp = Number(enteredTemp.value);

  if (isNaN(givenTemp) || enteredTemp.value === "") {
    alert("Enter a valid number");
  }
  else {

    if (toC.checked) {
      let tempInC = (givenTemp - 32) * 5 / 9;
      display.textContent = tempInC.toFixed(2) + " °C";
    }
    else if (toF.checked) {
      let tempInF = (givenTemp * 9 / 5) + 32;
      display.textContent = tempInF.toFixed(2) + " °F";
    }
    else {
      display.textContent = "Please select a unit";
    }


    toC.checked=false;
    
    toF.checked=false;
  }

}