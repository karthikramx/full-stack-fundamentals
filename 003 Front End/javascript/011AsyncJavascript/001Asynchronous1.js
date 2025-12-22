// Asynchronous JavaScript Introduction 
// very important for data fetching and user interactions
// lets see how Javascript is designed to be non - blocking

// Example 1

function function1() {
    console.log("logging from function 1, part 1")

    function2();
    console.log("logging from function 1, part 2")
}

function function2() {
    console.log("logging from funciton 2, part 1")
}
function1()

// ^ here we notice all of the actions are executed synchronously 


// Async exections example below!!!

function functionx() {

    console.log("logging from fuction 1, part 1")
    functiony()
    console.log("logging from fuction 1, part 2")
}

function functiony() {
    setTimeout(() => console.log('function two'), 2000);
}

functionx()

// here we notice that the funtion exection wasn't sequential 

// Key Takeaways
// Synchronous JavaScript: Executes code line by line, waiting for each task to complete before moving on.
// Asynchronous JavaScript: Allows tasks to run in the background, enabling the engine to continue executing other code. This is essential for handling tasks like network requests without freezing the application.

