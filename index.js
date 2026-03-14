// Objects in JS = A collection of related properties and/or methods
// can represent real world objects (people,product,places)
// object =(key:value/function);

//methods  is a function that belongs to an object

const person1={
    firstName:"Spongebob",
    lastName:"Squarepants",
    age:30,
    isEmployed:true,
    sayHello: ()=>{console.log("say Hello")},
    eat: ()=>{console.log("im eating")},

}

const person2={
    firstName:"Patric",
    lastName:"Star",
    age:42,
    isEmployed:false,



}

console.log(person1.firstName,person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName,person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
