// reduce() in JavaScript

// reduce() is used to take all elements of 
// an array and reduce them to a single value.


// const prices= [5,30,10,25,15,20];


// const total=prices.reduce(sum);
// console.log(total);
// function sum(accumalator, element){


// return accumalator+element;
// }

const grades=[75,90,80,65,95];


const maximum= grades.reduce(getMax);
console.log(maximum);

function getMax(accumalator,element){

    return Math.max(accumalator, element);
}

const minimum= grades.reduce(getMin);
console.log(minimum);

function getMin(accumalator,element){

    return Math.min(accumalator, element);
}