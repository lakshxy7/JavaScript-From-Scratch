// Type conversion
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("sub").onclick= function(){
    radius=document.getElementById("radi").value;

    radius=Number(radius);
    circumference=2 * PI * radius;
    console.log(circumference);
    document.getElementById("display").textContent=circumference + " "+"cm";
}