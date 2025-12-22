// Declaring and Invoking a function 

// there are three ways in which you can define functions
// in Javascript

//* function declaration 
function printName(name) {
    console.log(`How are you doing ${name}`)
}
printName("Karthik")

//* function expression
const sayHello = function (name) { console.log(`hello! - ${name}`) }
sayHello("karthik")

//* arrow function 
const sayBye = (name) => { console.log(`Bye - ${name}`) }
sayBye("karthik")

//* tiny arrow functions
const square = (number) => number * number
console.log(square(5))