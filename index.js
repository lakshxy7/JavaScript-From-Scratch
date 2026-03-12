// ARROW FUNCTION
// Arrow functions are a shorter and cleaner way to write
// function expressions in JavaScript.
// They are mostly used for small or simple functions.
// The syntax uses an arrow => instead of the "function" keyword.

// syntax
// (parameters) => { code }

// normal function
const hello=function hello(){
    console.log("hello");
}

hello(); // calling the function

// arrow function
const tello = (name) => console.log("tello",name);

tello("lakshay"); // calling the function





//zzzzzzzzzzzzzzz

setTimeout(function(){

    console.log("hello3");
},1500)

setTimeout(()=>{

    console.log("hello4");
},2000)