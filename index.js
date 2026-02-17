// ======================================
// LOGICAL OPERATORS IN JAVASCRIPT
// ======================================
// Used to combine or manipulate boolean values (true / false)


// 🔹 &&  → AND  
// Returns true if BOTH conditions are true

// 🔹 ||  → OR  
// Returns true if AT LEAST ONE condition is true

// 🔹 !   → NOT  
// Reverses the boolean value



// ======================================
// EXAMPLE 1: Using OR (||)
// ======================================

const temp = 250;

if (temp <= 0 || temp > 30) {
  console.log("Weather is BAD");
} else {
  console.log("Weather is GOOD");
}



// ======================================
// EXAMPLE 2: Using NOT (!)
// ======================================

const isSunny = false;

if (isSunny) {
  console.log("It is Sunny");
} 
else if (!isSunny) {
  console.log("It is not Sunny");
}
