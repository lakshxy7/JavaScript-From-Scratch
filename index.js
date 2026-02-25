// ======================================================
// SPREAD OPERATOR (...) IN JAVASCRIPT
// ======================================================
//
// The spread operator (...) allows an iterable
// (like an array or string) to be expanded into
// individual elements.
//
// It "unpacks" the values.

// ======================================================
// 1️⃣ SPREAD WITH ARRAYS
// ======================================================

let numbers = [1, 2, 3, 4, 5];

// Math.max() expects separate numbers like:
// Math.max(1, 2, 3, 4, 5)
//
// If we pass the array directly:
// Math.max(numbers)
// It gives NaN (Not a Number)
//
// Why?
// Because Math.max does NOT accept an array.
// It expects individual numeric arguments.
// Passing an array makes it invalid.
//
// Spread fixes this by unpacking the array:

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); // 5
console.log(minimum); // 1


// ======================================================
// 2️⃣ SPREAD WITH STRINGS
// ======================================================
//
// A string is also iterable.
// Spread breaks it into individual characters.

let username = "Lakshay Deep";

let letters = [...username];

console.log(letters);
// ["L", "a", "k", "s", "h", "a", "y", " ", "D", "e", "e", "p"]


// ======================================================
// 3️⃣ JOINING AFTER SPREAD
// ======================================================
//
// join() converts array back into string
// and inserts a symbol between elements

let letters2 = [...username].join("*");

console.log(letters2);
// L*a*k*s*h*a*y* *D*e*e*p


// ======================================================
// 4️⃣ COPYING ARRAYS (SHALLOW COPY)
// ======================================================
//
// Spread can copy an array.
// This creates a NEW array in memory.

let fruits = ["apple", "banana", "orange"];

let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);

// Important:
// If we did:
// let newFruits = fruits;
// That would NOT copy.
// Both variables would point to same array.


// ======================================================
// 5️⃣ MERGING ARRAYS
// ======================================================
//
// Spread can combine multiple arrays.

let vegetables = ["carrot", "potato", "celery"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
// ["apple", "banana", "orange", "carrot", "potato", "celery", "eggs", "milk"]


// ======================================================
// SUMMARY
// ======================================================
//
// ...array → Unpacks elements
// ...string → Splits into characters
// Used for:
// ✔ Finding max/min
// ✔ Copying arrays
// ✔ Merging arrays
// ✔ Expanding elements inside function calls