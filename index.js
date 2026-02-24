// Functions in JavaScript
// A function lets you write code once and use it whenever you need.
// To run the code inside a function, you must call (invoke) the function.

// function xyz(argument1, argument2)
// The values we pass into a function when calling it are called arguments.
// The variables written inside the function definition are called parameters.


// When we call the function, we send values to it.
// These values ("Brocode" and 25) are arguments.


// The order of parameters matters.
// The first value goes to username.
// The second value goes to age.
// If you change the order, the output will change.



function add(x,y){

// x and y are parameters
// This function returns x raised to the power of y
// ** means exponent (power)

return x**y;
}

// 4 and 6 are arguments
// So this becomes 4 raised to the power 6 (4^6)
let answer = add(4,6);

console.log(answer); // prints 4096



function isValidEmail(email){

  // The includes() method checks if a string contains a specific value
  // Here we are checking if the email contains "@" and "."
  
  if (email.includes("@","."))
  {
    return true;   // If condition is true, function returns true
  }
  else
  {
    return false;  // Otherwise it returns false
  }

}

// This will check if the string contains "@" and "."
console.log(isValidEmail("laks.@"));