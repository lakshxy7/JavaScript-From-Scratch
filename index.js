// Variable Scope = where a variable is recognized and accessible
// There are two main types: local scope and global scope.

// Variables defined inside a function are called local variables.
// They are accessible ONLY inside that function.

// Variables defined outside a function are called global variables.
// They can be accessed inside any function.

// If we have two variables with the same name,
// the local variable is given priority over the global one
// (this is called shadowing).

function function1(){

  let x = 1;  // Local variable (only inside function1)
  console.log(x);
}

function function2(){

  let x = 5;  // Local variable (only inside function2)
  console.log(x);
}

function1();  // prints 1
function2();  // prints 5