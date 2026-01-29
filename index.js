// User Input using windows prompt

let username;
username =window.prompt("whats your username?");

document.getElementById("p1").textContent=` the user name is ${username}`;

let age= window.prompt("enter your age");


age=age*45;
document.getElementById("p2").textContent=`Boom your new age is ${age}`;