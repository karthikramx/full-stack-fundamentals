// this keyword 
// the this keyword in javascript refers to the object that 
// is executing the current function 
// It provides a way to access the properties and methods 
// of the object within which the function is being executed

// JAVASCRIPT
function Sentence(words) {
    this.words = words;
    const wordx = words;
    console.log(this);
}

const S = new Sentence("this is a new sentence")
console.log(S)
console.log(S.words)
console.log(S.wordx)

// When the function is called with the new keyword, 
// this refers to the new object being created 

