let myName: string = "karthik";
let myAge: number = 31;
console.log(myName);
console.log(myAge);

// Type 'string' is not assignable to type 'number'.ts(2322)
// this will fail on build
myAge = "31";

// Because you don't have to directly tell Typescript to assign a type to a variable (explicit),
// it will also infer the types of everything based on the initial value (implicit).

// This is very helpful.
// This stops us from writing code where we declare a variable as a string or object-
// and then later try to map over it like an array.
// Typescript knows and keeps track of our variable
// types and will yell at us when we do something wrong.

// Some basic types in typescript are:
let useName: string;
let useAge: number;
let isLoggedIn: boolean;
let hobbies: string[];
let scores: Array<number>; // generic array type
let role: [number, string]; // tuple
let anyType: any; // avoid using this as much as possible
let linkedInLink: undefined;
let userAddress: null;

// Assigning multiple types using union types
let multiType: string | number;
multiType = "karthik";
multiType = 31;
multiType = true; // Error: Type 'boolean' is not assignable to type 'string | number'
