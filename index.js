// constructor = special method for defining the 
// properties and methods of object 
function Car(make,model,year,color){

    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive=function(){
        console.log(`you are driving ${this.model}`)
    };

}


// function Car(a, b, c, d){
//     this.make = a
//     this.model = b
//     this.year = c
//     this.color = d
// we can also write in this way we are just mapping variables
// }
const car1= new Car("Ford","Mustang",2024,"red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
const car2=new Car("Ford","Figo",2012,"blue");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
