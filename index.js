// rest parameters = (...rest) allow a function to
//  work with a variable
// number of arguments by bundling them into an array
//
// spread = expands an array (or string) into separate elements
// rest   = bundles separate elements into an array

// function openFridge(...foods){

//   console.log(foods);
// }
// const food1="Pizza";
// const food2="burger";
// const food3="Sushi";
// const food4="Hotdog";
// const food5="Bread";

// openFridge(food1,food2,food3,food4,food5);




function getFood(...foods){

 return foods;
}



const food1="Pizza";
const food2="burger";
const food3="Sushi";
const food4="Hotdog"; 
const food5="Bread";

const foods=getFood(food1,food2,food3,food4,food5);

console.log(foods);




function sum(...numbers){

    let result = 0;

    for(let number of numbers){
        result += number;
    }

    return result;
}


function getAverage(...numbers){

    let result = 0;

    for(let number of numbers){
        result += number;
    }

    return result / numbers.length;
}