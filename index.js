// Functions in JavaScript
// A function lets you write code once and use it whenever you need.
// To run the code inside a function, you must call (invoke) the function.

// function xyz(argument1, argument2)
// The values we pass into a function when calling it are called arguments.
// The variables written inside the function definition are called parameters.

function happyBirthday(username, age){
console.log(`Happ Birthday1 ${username}`);
console.log(`Happ Birthday0`);
console.log(`Happ Birthday2`);
console.log(`Happ Birthday3`);
console.log(`Happ Birthday4`);
console.log(`you are ${age} years old`);
}

// When we call the function, we send values to it.
// These values ("Brocode" and 25) are arguments.
happyBirthday("Brocode", 25);

// The order of parameters matters.
// The first value goes to username.
// The second value goes to age.
// If you change the order, the output will change.

happyBirthday("SB", 100);