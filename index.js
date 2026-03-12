// FUNCTION DECLARATION
// A function declaration is a named block of reusable code
// that performs a specific task when it is called.
// It is created using the "function" keyword followed by
// the function name and parentheses ().

function greet(name) {
    console.log("Hello " + name);
}

greet("Lakshay"); // calling the function



// FUNCTION EXPRESSION ***
// A function expression is a function that is stored inside
// a variable. The function acts like a value assigned to that variable.
// The variable name is used to call the function.
//simply way to defined functions as variable
const greetUser = function(name) {
    console.log("Hello " + name);
};

greetUser("Lakshay"); // calling the function


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
 const  numbers=[1,2,3,4,5,6];
 const squares= numbers.map( function (element){

    return Math.pow(element,2);
 }
);
 console.log(squares)

 


 const cubes= numbers.map( function (element){

    return Math.pow(element,3);
 }
);
 console.log(cubes)


 const evenNums= numbers.filter(function(element){

    return element%2===0;
 })
 console.log(evenNums)

 const oddNums= numbers.filter(function(element){

    return element%2!==0;
 })
 console.log(oddNums)



 const total= numbers.reduce(function(accumulator,element){

return accumulator+element

 })
  console.log(total)
