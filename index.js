// .map()=accepts a callback and applies that function
//to each element of an array, then return a new array

const numbers=[1,2,3,4,5];

const squares=numbers.map(square)
const cubes=numbers.map(cube);
console.log(cubes)



console.log(squares);
function square(element){


    return Math.pow(element,2)
}

function cube(element){



    return Math.pow(element,3);
}

const students=["squidward","patrick","spongebob","sandy"]
const studentsUpper=students.map(upperCase);
const studentsLower=students.map(lowercase);

console.log(studentsUpper);
console.log(studentsLower);
function upperCase(element){


    return element.toUpperCase();
}
function lowercase(element){


    return element.toLowerCase();
}