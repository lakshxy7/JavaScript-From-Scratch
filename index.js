// ======================================
// WHILE LOOP
// ======================================
// A while loop repeats code as long as the condition is TRUE.



// ======================================
// EXAMPLE 1: Keep Asking Until User Enters a Name
// ======================================

/*
This loop keeps running if:
- The user enters an empty string ""
- OR clicks Cancel (which returns null)
*/

let username = "";

while (username === "" || username === null) {
  username = window.prompt("Enter your name:");
}

console.log(`Hello ${username}`);



// ======================================
// EXAMPLE 2: do...while Loop
// ======================================
// A do...while loop runs the code ONCE first,
// then checks the condition after.

let user = "";

do {
  user = window.prompt("Enter your name:");
} while (user === "" || user === null);

console.log(`Hello ${user}`);



// ======================================
// EXAMPLE 3: Simple Login System
// ======================================
// The loop continues until loggedIN becomes true.

let loggedIN = false;
let loginUser;
let password;

while (!loggedIN) {

  loginUser = window.prompt("Enter your username:");
  password = window.prompt("Enter your password:");

  // Condition for successful login
  if (loginUser === "" && password === "") {
    loggedIN = true;
    console.log("You are logged in ✅");
  } 
  else {
    console.log("Invalid credentials ❌");
  }
}
