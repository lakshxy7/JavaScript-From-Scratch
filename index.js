// ======================================
// METHOD CHAINING
// ======================================
// Calling multiple methods in one continuous line
// Each method works on the result of the previous one


let userName = window.prompt("Enter your username");


// ======================================
// ❌ WITHOUT METHOD CHAINING
// ======================================

// Step 1: Remove extra spaces
// userName = userName.trim();

// Step 2: Get first letter
// let firstLetter = userName.charAt(0);

// Step 3: Capitalize first letter
// firstLetter = firstLetter.toUpperCase();

// Step 4: Get remaining letters
// let remainingLetters = userName.slice(1);

// Step 5: Convert remaining letters to lowercase
// remainingLetters = remainingLetters.toLowerCase();

// Step 6: Combine them
// userName = firstLetter + remainingLetters;

// console.log(userName);



// ======================================
// ✅ USING METHOD CHAINING
// ======================================

userName =
  userName.trim().charAt(0).toUpperCase() +
  userName.trim().slice(1).toLowerCase();

console.log(userName);
