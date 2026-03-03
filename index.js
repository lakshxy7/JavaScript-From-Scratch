//forEach()= method used to iterate over the elements of an array
// and apply a specified function (callback ) to each element
// array.forEach(callback)
// element aregument are provided, 
//element index and array are provided
let fruits =["APPLE","orange","BANANA","coconut"];


fruits.forEach(capitalize);


fruits.forEach(display);

function toUpperCase(element,index,array){
    
array[index]=element.toUpperCase();

}



function display(element){


    console.log(element);
}


function toLowerCase(element,index,array){
    
array[index]=element.toLowerCase();

}

function capitalize(element,index,array){
    
array[index]=element.charAt(0).toLowerCase()+ element.slice(1);

}

