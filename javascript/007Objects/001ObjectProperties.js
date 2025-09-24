// Accessing, Adding and Updating an Object's Properties

// Dot Notation 
// Accessing Properties 

const person = {
    firstName: "Karthik",
    lastName: "Ram",
    age: 31
}

console.log(person.firstName)

// Adding or Updating Properties 
const dog = {
    name: "tommy"
}
dog.breed = "Huskie"
console.log(dog)
dog.breed = "Not Huskie"
console.log(dog)

// Square Bracket Notation
console.log(dog["name"])
