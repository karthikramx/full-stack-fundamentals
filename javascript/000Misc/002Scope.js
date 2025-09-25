// ------------------------------------------- //
// -------------------Scope------------------- //
// ------------------------------------------- //

// Shows availability of a variables inside the code 
// Naming conflicts can be solved
// global scope / local scope / block scope
// { a variable inside this block is the easiest way to find it}


const firstName = "karthik"
const logName = () => {
    const localFirstName = "Karthik Ram"
    console.log(firstName) // global variable
    console.log(localFirstName) // local scope! 
}

// Global Scope
// Some intuition here about scoping
// too many variables in global leads to your app, taking up too much memory
// makes your code very unpredictable
// refactoring challenges - you will have to change it through out the program

// Local Scope
// No naming conflict
// memory advantage! these are immediately deleted
// no refactoring challenges

// Block Scope (inside, if, else, switch)
// use let and const / var makes it access the variable globally!


// ------------------------------------------- //
// -----------------Hoisting------------------ //
// ------------------------------------------- //
// It means, the variable move to the top of their scope - whether its global or local
// Only works with var (and not with const / let) 
// 


// ------------------------------------------- //
// -----------------Closures------------------ //
// ------------------------------------------- //

// It allows to access the outer scope even after the scope does exist, 
// Here is an example of that.

function outerFunction() {
    const test = "this is a outer test variable"

    function innerFunction() {
        const test2 = "this is a inner test variable"

        console.log(test, test2)
    }

    return innerFunction
}

const innerFuncTest = outerFunction()

innerFuncTest() // here it still print the test outer variable, the test variable is still in scope

