// Promises
// Promises help you avoid callback hell

// These are objects that respresent the eventual completion 
// (or failure) of an asynchronous operation and its
// resulting value. Promises can either return  the successfully fetched data or an error 

// if the call is successful it will call resolve with the result 
// use .then() to handle the resolved value of the promise 
// use .catch() to handle the rejected error of the promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Got the user");
        resolve({ user: 'Karthik' })
    }, 2000)
})

// Getting the data from the promise
promise.then((user) => { console.log(user) })

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Rejecting!")
        reject("Error")
    }, 2000)
})

promise2.then((user) => {
    console.log(user)
}).catch((error) => { console.log(error) })