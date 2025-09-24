// What is a method? 
// a method is a function associated with an object
// Methods allow objects to perform actions 


var myObj = {
    myMethod: function (params) {
        // do something... 
    },
    myOtherMethod(params) {
        // ... do something else
    }
};

// example using this and the object
function displayCar() {
    var result = `A beautiful ${this.year} ${this.make} ${this.model}`
    console.log(result)
    return null;
}

const newCar = {
    year: 2015,
    make: 'Volkswage',
    mode: 'Jetta',
    describe: displayCar
}

console.log(newCar.describe())

// Object Keys
// returns an array of object keys, allowing you to iterate over them 
console.log(Object.keys(newCar))

// Object Values
// returns an array of object values, allowing you to iterate over them
console.log(Object.values(newCar))

// Object entries
// returne a nested array of an object's key value pairs, allowing for easy iteration and manipulation
console.log(Object.entries(newCar))

const person = { firstName: "karthik", lastName: "ram" };

const profile = Object.assign({ test: "test" }, newCar, person)
console.log(profile)