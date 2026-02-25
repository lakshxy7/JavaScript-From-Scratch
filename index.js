// ======================================================
// ARRAYS IN JAVASCRIPT (FULL EASY EXPLANATION)
// ======================================================

let fruits = ["apple", "orange", "banana"];


// ======================================================
// 1️⃣ INDEX (POSITION)
// ======================================================

console.log(fruits[1]); // orange
console.log(fruits[2]); // banana
console.log(fruits[0]); // apple


// ======================================================
// 2️⃣ MODIFYING ELEMENT
// ======================================================

fruits[0] = "Coconut";
console.log(fruits);
    

// ======================================================
// 3️⃣ ADDING ELEMENTS
// ======================================================

// Adds at END
fruits.push("grapes");
console.log(fruits);

// Adds at BEGINNING
fruits.unshift("mango");
console.log(fruits);


// ======================================================
// 4️⃣ REMOVING ELEMENTS
// ======================================================

// Removes from END
fruits.pop();
console.log(fruits);

// Removes from BEGINNING
// fruits.shift();


// ======================================================
// 5️⃣ LENGTH
// ======================================================

let count = 0;
console.log(fruits.length);


// ======================================================
// 6️⃣ FIND INDEX
// ======================================================

console.log(fruits.indexOf("banana"));


// ======================================================
// 7️⃣ LOOPING (ITERATION)
// ======================================================

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    count++;
}

console.log(`there are total ${count} elements`);


// ======================================================
// 8️⃣ SORT AND REVERSE TOGETHER
// ======================================================
//
// sort() → arranges alphabetically
// reverse() → reverses order
// If used together → gives descending alphabetical order

fruits.sort().reverse();
console.log(fruits);


// ======================================================
// 9️⃣ for...of LOOP (SIMPLER WAY)
// ======================================================

for (let fruit of fruits) {
    console.log(fruit);
}