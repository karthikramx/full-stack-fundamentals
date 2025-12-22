// Shallow Cloning - you copy only the top level properties 
// this doesnot change the nested objects 

// Shallow Clone Using the Spread Operator 
const numbers = [1, 2, 3, 4, 5]
const newNumbers = [...numbers] // this copies by values (cloned!)


console.log(numbers === newNumbers) // donot have the same reference 
console.log(numbers)
console.log(newNumbers)

numbers.push(6)
console.log(numbers)

// You may do this to objects as well 
testObject = { firstName: "karthik", lastName: "ram" }
// shallow cloning 
testObject2 = { ...testObject }
console.log(testObject === testObject2)
