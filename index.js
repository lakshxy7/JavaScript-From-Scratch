//this= this is a keyword,
//it is a reference to the object where this is used
//(the object depends on the immediate context)
//persopn.name=this.name
// "this" refers to the object that is
//  calling the function

const person1={
    name:"spongebob",
    favFood:"hamburgers",
    sayHello:function(){console.log(`Hi i am ${this.name} and my favfood is ${this.favFood}`)}

}
person1.sayHello(); 