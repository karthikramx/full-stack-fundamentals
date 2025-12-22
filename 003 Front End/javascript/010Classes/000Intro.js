// Classes 
// A class in JavaScript is a blueprint for creating objects. 
// It defines the properties and methods that the 
// objects created from the class will have.

class Person {
    constructor(name, age, working) {
        this.name = name,
            this.age = age,
            this.working = working
    }
}

let user = new Person("karthik", 31, true);
console.log(user)