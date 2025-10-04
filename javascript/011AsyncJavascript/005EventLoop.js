// Understanding the event loop

// sychronous and asynchronous code and observed 
// that async code behaves differntly 

// all javascript code runs in the web-browser! 
// The javascirpt environment consists of
// Javascript Engine - Google's V8 Engine (powers both google chorme and node.js) 
// Web APIs - provided by the browser: setTimeOut, DOM manipulation, fetch
// Job/Callback Queue (this is where async callbacks are queued) 

// The event loop is a fundamental concept that explains how js, handles async operations
// It continously checks for the call stack, if there;s any function that needs to be executed
// if the call stack is empty, it takes the first callback from the callback queue and pushes it into the stack for execution

// The event allows javascript to perform non-blocking operations 
// This ensures the browser remains responsive 

