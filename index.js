// ======================================
// FOR LOOP
// ======================================
// A for loop repeats code a LIMITED number of times.
// It has 3 parts:
// 1. Initialization
// 2. Condition
// 3. Increment / Decrement



// ======================================
// EXAMPLE 1: Count from 0 to 2
// ======================================

for (let i = 0; i <= 2; i++) {
  console.log(i);
}



// ======================================
// EXAMPLE 2: Count from 0 to 10 (Step of 2)
// ======================================
// j += 2 increases j by 2 each time

for (let j = 0; j <= 10; j += 2) {
  console.log(j);
}



// ======================================
// EXAMPLE 3: Count Backwards (10 to 2)
// ======================================

for (let i = 10; i >= 2; i--) {
  console.log(i);
}



// ======================================
// EXAMPLE 4: Skip a Value using continue
// ======================================
// continue → skips the current iteration

for (let i = 0; i <= 20; i++) {

  if (i === 13) {
    continue;   // Skip number 13
  }

  console.log(i);
}



// ======================================
// EXAMPLE 5: Stop Loop Early using break
// ======================================
// break → completely stops the loop

for (let i = 0; i <= 20; i++) {

  if (i === 13) {
    break;   // Stop when i becomes 13
  }

  console.log(i);
}
