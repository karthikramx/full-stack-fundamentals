// Async Javascript & Callback Part 1

// Simulating Asynchronous Data Fetching 

const fetchUser = (username) => {
    setTimeout(() => {
        return { user: username }
    }, 2000); // Simulating a delay of 2000 ms
}

const user = fetchUser('test')
console.log("testing a new function")
console.log(user)

// Callback function 
// To handle asynchronous operations like data fetching, 
// we can use callback functions. 
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

const fetchUserUsingCallback = (username, callback) => {
    setTimeout(() => {
        callback(username)
    }, 2000)
}

const userCallBack = (username) => {
    console.log(username)
}

fetchUserUsingCallback('karthik', userCallBack);