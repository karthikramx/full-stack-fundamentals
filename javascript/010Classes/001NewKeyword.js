// The new keyword

// The new keyword in JavaScript is used to create a new object. 
// At its core, the new keyword performs a simple yet powerful function: it creates a new object.

const person = new Object();

person.lastName = "karthik ram"
console.log(person.lastName)
console.log(typeof person)

// creating custom constructors 

function Person(name, age, professions) {
    this.name = name,
        this.age = age, this.professions = professions
}

const john = new Person("karthik", 31, "solutions architect")
console.log(john.name)

// new and this
// The new keyword binds this to the new object being created. 

// Built in Constructors 
const myDate = new Date('August 11, 2025');
console.log(myDate.getFullYear()); // prints 2025

const arr = new Array();
arr.push(2)
console.log(arr)
console.log(typeof arr)
console.log(arr instanceof Array)