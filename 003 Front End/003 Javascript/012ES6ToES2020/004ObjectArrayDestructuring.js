// Array Destructuring 
let introduction = ["hello", "how are you", "doing?"]
let [a, b, c] = introduction;
console.log(a)
console.log(b)
console.log(c)

// swapping 
let x = 3;
let y = 5;

[x, y] = [y, x]
console.log(x, y)

// Destructuring an objects
let user = { namu: "karthik", age: 10 }
let { namu, age } = user;
console.log(namu)
console.log(age)

// You may destructure in the function parameter
function testFunction({ name, age }) {
    console.log(`the name is ${name} and age is ${age}`)
}

const obj1 = { name: "karthik", age: 31 }
testFunction(obj1)