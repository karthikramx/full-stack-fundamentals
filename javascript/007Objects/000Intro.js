// Objects Introduction

// Most important data type and building block form modern Javascript
// Objects can be compared to real life objects like (person, or a thing)
// they have properties that define thier characteristic 

// for example 
// itesm that can carry money
const newObj = {
    type: "wallet",
    color: "red",
    quantity: 10
}

// Objects are unordered
// Properties can change and dont always remain the same
// you can also have nested objects like this
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    car: {
        year: 2015,
        color: 'red'
    }
}

// using variables are property names
const personName = "karthik"
const testObj = { personName }
console.log(testObj)

