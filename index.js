// User Input using html div 

document.getElementById("mysubmit").onclick= function(){


 username = document.getElementById("mytext").value;
 console.log(username);
 document.getElementById("myh1").textContent=`Hello ${username}`

}