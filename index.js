// callback = a function that is passed as an argument
// to another function

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// Think of it like:
// "Hey, when you're done, run this function next."

// ---------------------------------------------

// We are calling sum()
// - displayPage is the callback function
// - 1 and 2 are the numbers to add

sum(displayPage, 1, 2);

function sum(callback, x, y){

    // Add the two numbers
    let result = x + y;

    // Once calculation is finished,
    // call the callback function
    // and send the result to it
    callback(result);
}

// ---------------------------------------------

function displayConsole(result){

    // This function receives the result
    // and prints it in the console
    console.log(result);
}

// ---------------------------------------------

function displayPage(result){

    // This function receives the result
    // and displays it inside an HTML element
    // with id "myH1"

    document.getElementById("myH1").textContent = result;
}