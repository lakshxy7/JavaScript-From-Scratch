// ARROW FUNCTION
// Arrow functions are a shorter and cleaner way to write
// function expressions in JavaScript.
// They are mostly used for small or simple functions.
// The syntax uses an arrow => instead of the "function" keyword.

// syntax
// (parameters) => { code }

const numbers=[1,2,3,4,5]
// 3. map()

// Used to transform each element and return a new array.

let Squares=numbers.map((element)=>{

    return Math.pow(element,2);
});
console.log(Squares);


let cubes=numbers.map((element)=>{

    return Math.pow(element,3);
});
console.log(cubes);

// 4. filter()

// Used to keep elements that match a condition.
let odds=numbers.filter((element)=>{

    return Math.pow(element,3);
});
console.log(cubes);



let total=numbers.reduce((accumulator,element)=>{return accumulator+element});
console.log(total);
