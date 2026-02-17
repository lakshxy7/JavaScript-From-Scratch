// ======================================
// STRING SLICING (Creating Substrings 
// from a portion of another screen)
// ======================================

// slice(start, end)
// → Extracts part of a string
// → Does NOT modify original string
// → End index is NOT included


// ======================================
// EXAMPLE 1: Extract First and Last Name
// ======================================

const fullName = "123 456";

// Step 1: Find position of space
let spaceIndex = fullName.indexOf(" ");

// Step 2: Extract first name (from start to space)
let firstName = fullName.slice(0, spaceIndex);

// Step 3: Extract last name (from space to end)
let lastName = fullName.slice(spaceIndex + 1);

// Output
console.log(`First name is ${firstName}`);
console.log(`Last name is ${lastName}`);



// ======================================
// EXAMPLE 2: Extract Email Username & Domain
// ======================================

const email = "lakshaydeepm25@gmail.com";

// Step 1: Find position of "@"
let atIndex = email.indexOf("@");

// Step 2: Extract username (before "@")
let userName = email.slice(0, atIndex);

// Step 3: Find position of "."
let dotIndex = email.indexOf(".");

// Step 4: Extract email provider (between "@" and ".")
let provider = email.slice(atIndex + 1, dotIndex);

// Output
console.log(`Username is ${userName}`);
console.log(`Provider is ${provider}`);
