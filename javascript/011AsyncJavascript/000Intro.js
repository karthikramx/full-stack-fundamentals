// Intervals and Timers

// Asynchornous Javascript 
// built in functions that enable you to execute code 
// at specified intervals or after a delay, even while
// other code is running. 

// setInterval()

setInterval(() => {
    console.log('Hi there')
}, 1000);

setInterval(() => {
    console.log('karthik')
}, 500)

// Javascript is not executed linearly 
// instead it is executed asynchronously
// meaning that some code can be executed 
// while other code is still running.

// this is what allows javascript to handle
// multiple tasks like network calls and user
// requests concurrently without blocking 

// In this we will explore 
// promises and async/await 
// this is important to build responsive and
// user-friendly applications.