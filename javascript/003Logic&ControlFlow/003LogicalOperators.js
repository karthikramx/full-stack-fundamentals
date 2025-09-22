// AND Operator (&&)

const age = 19;
const isCool = true;

if (age > 18 && isCool) {
    console.log("You can enter the club");
} else {
    console.log("You cannot enter the club");
}

console.log(age && isCool); // true
console.log(0 && isCool); // 0
console.log(19 && false); // false
console.log(false && 0); // false
console.log("Hello" && 999); // 999

// OR Operator (||)
const age2 = 16;
const isCool2 = true;

if (age2 > 18 || isCool2) {
    console.log("You can enter the club");
} else {
    console.log("You cannot enter the club");
}

console.log("test" || 0 || true || false);
if ("test" || 0 || true || false) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

console.log(!"karthik"); // false   
console.log(!!!!!0);

// Boolean Class to convert truthy and falsy values
console.log(Boolean('karthik'))

// Javascript is the most laziest language there is!