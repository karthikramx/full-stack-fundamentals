// Async / await 
// It simplifies working with promises
// It provides a more intuitive and readable way to handle 
// asynchronous operations, making code look and behave more like 
// sychronous code. 

// Async and await is syntatic sugar 
// built on top of promises. It allows you to write async code that 
// looks and behaves like sync code, which makes it easier to read 
// and maintain 

// Advantages
// it resembles sycn functions making them easier to understand 
// error handling : you can use try/catch blocks to handle errors, 
// similar to synchronous code. 

// Examples 
// Lets take a look at a simple example 

const fetchNumber = async () => {
    return 25;
} // this is a function that returns a promise

fetchNumber().then(result => {
    console.log(result)
});

// Await : the await keyword is used to pause the execution of an async 
// function until a promise is fulfilled. It can only be used inside an async function 

// non blocking: using await doesn nto block the entire program; it only pauses the 
// executionof the async fuction until the promise is resolved. 

// Refactoring with Async / Await 

// this is a asynchronous function that returns a promise ! 
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Karthik')
        }, 2000)
    })
}

const displayData = async () => {
    try {
        const user = await fetchUser(); // wait until the promise is resolved
        console.log(user);
    } catch (error) {
        console.log('Error:', error);
    }
}

displayData();

// final take aways
// async/await: provide a cleaner and more readable way to work with promises
// await: pauses the execution of an async function until a promise is resolved
// a try/catch block is used to handle any errors that might occur during the asynchronous operations

// by using async/await, you can write asynchronous code that is easeir to read and maintain/
// making it a powerful tool for modern Javascript development 

// -----
// A very simple explanation 
// A Promise is a special object that represents a value we'll get in the future
// it can take three states, 1. Pending, 2. Resolved, 3. Rejected... 


// function fetchNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(42); // after 2 sec, we give back "42"
//         }, 2000)
//     })
// }

// fetchNumber().then(result => { console.log("Got Number:", result) })

// // ------ // ------ // ------ // ------ // 

// async function getNumber() {
//     try {
//         const result = await fetchNumber();
//         console.log("Got number:", result)
//     }
//     catch (error) {
//         console.log("this is an error:", error)
//     }
// }
// getNumber();