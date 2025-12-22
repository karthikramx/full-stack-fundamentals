// Lets talk about difference between value and reference 
// Primitive and Complex data types in Javascript 
// Primitive datatypes are copied by value 
// Complex datatypes are copied by reference 


// Primite data types 
const a = "karthik"
const b = a
console.log(a === b) // these are compared by the valuek - true


// Complex data type 
const object1 = { firstName: "karthik", age: 21 }
const object2 = object1;
console.log(object1 === object2) // false as there are copied by refs
