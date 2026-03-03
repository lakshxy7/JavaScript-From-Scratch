//forEach()= method used to iterate over the elements of an array
// and apply a specified function (callback ) to each element
// array.forEach(callback)
// element aregument are provided, 
//element index and array are provided
let numbers =[1,2,3,4,5];

numbers.forEach(square);
numbers.forEach(display);

function display(element){
    console.log(element);
}



function double(element,index,array){
    array[index]=element*2;

}

function triple(element,index,array){
    array[index]=element*3;
}

function square(element,index,array){
    array[index]=Math.pow(element,2)
}

function cube(element,index,array){
    array[index]=Math.pow(element,3)
}