// function declaration = define a resuable block of 
// code that performs a specific task

//function expressions=a way to define functions as 
 //values  or variables
function hello(){

    console.log("hello");
}
hello();



  const tello=function(){
    console.log("tello");
 }
 tello();

setTimeout(tello,3000);

setTimeout(function(){console.log("hello")},3000

)