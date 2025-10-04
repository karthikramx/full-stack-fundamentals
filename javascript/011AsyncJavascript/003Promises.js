// Promises
// Promises help you avoid callback hell

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Got the user");
        resolve({ user: 'Karthik' })
    }, 2000)
})

// Getting the data from the promise
promise.then((user) => { console.log(user) })