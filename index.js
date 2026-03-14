// The static keyword is used to 
// create methods or properties that 
// belong to the class itself, not to the
// objects created from that class.

class MathUtils{

    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }

}

console.log(MathUtils.PI);
console.log(MathUtils.getDiameter(10));
console.log(MathUtils.getCircumference(10));
console.log(MathUtils.getArea(10));