// .filter() =creates a new array by filtering 
// out elements

let numbers=[1,2,3,4,5,6,7];

let evenNum=numbers.filter(isEven);
console.log(evenNum);

let oddNum=numbers.filter(isOdd);
console.log(oddNum);


function isEven(element){

    return element%2===0;

}

function isOdd(element){
    return element%2!==0;


}




const ages=[16,17,18,20,60];

let adult=ages.filter(isAbove);
console.log(adult);


let child=ages.filter(isLess);
console.log(child);


function isAbove(element){
 return element>=18;
    
}

function isLess(element){
 return element<=18;
    
}