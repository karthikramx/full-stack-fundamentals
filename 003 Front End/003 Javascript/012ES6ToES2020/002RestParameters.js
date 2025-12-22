// Rest Parameters

// Rest parameters enable you to represent an indefinite number of arguments as an array . 
// This is particularly useful when you want to work with functions that can take a variable number of arguments .

function calculateTotal(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(calculateTotal(1, 2, 3));
console.log(calculateTotal(1, 2, 3, 4, 5))

// the rest params are true array, you may use 
// whatever functions you have

// callee property: the arguments object has a depreceted callee property 

// parameter syncing 