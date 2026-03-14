// CLASSES (ES6 Feature)
// A class is like a blueprint or template used to create objects.
// It helps organize code in a cleaner and structured way.

class Product {

    // CONSTRUCTOR
    // The constructor runs automatically when we create a new object.
    // It initializes (sets up) the values for the object.

    constructor(name, price){

        // "this" refers to the current object being created.

        this.name = name;   // stores the product name
        this.price = price; // stores the product price
    }


    // METHOD
    // A method is simply a function inside a class.
    // This method prints the product details.

    displayProduct(){

        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);

    }


    // Another METHOD
    // This method calculates the price after adding tax.

    calculateTotal(salesTax){

        // formula → price + (price × tax)
        return this.price + (this.price * salesTax);

    }

}


// Tax rate (5%)
const salesTax = 0.05;


// Creating objects using the class
// "new" creates a new object based on the Product class

const product1 = new Product("Shirt", 200);
const product2 = new Product("Pants", 300);
const product3 = new Product("Jacket", 600);


// Calling the method to display product information

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();


// Calling the method to calculate total price including tax

const total = product1.calculateTotal(salesTax);

console.log(`Total price with tax: ${total}`);