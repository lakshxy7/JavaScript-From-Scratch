// .filter() =creates a new array by filtering 
// out elements

let words=["apple","banana","orange",
    "kiwi","pomegranate","coconut"];

let elementsAboveSix= words.filter(aboveSix);
console.log(elementsAboveSix);

function aboveSix(element){



    return element.length>6;
}
