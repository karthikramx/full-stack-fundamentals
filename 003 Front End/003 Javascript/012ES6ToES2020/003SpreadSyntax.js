// Spread Syntax

// the spread operator expands an iterable into individual elements 
// it is the opposite of the rest operator 

function add(x, y, z) {
    return x + y + z
}

const numbers = [1, 2, 3]
console.log(add(...numbers))


// the other way of using this 

const a = [1, 3, 4]
const b = [1, 2, 3, ...a, 1, 23]
console.log(b)

const obj1 = { foo: "bar", x: 42 }
const obj2 = { bar: "bax", y: 52 }
console.log({ ...obj1, ...obj2 })