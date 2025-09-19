// Truthy and Falsy
// If you struggle to understand this or you dont know this
// You might actaully stuggle to read code!

// Falsy Values
// Memorize it 
// 1. false
// 2. 0
// 3. "" 
// 4. null
// 5. undefined 
// 6. NaN
// {} [] => not falsy

// Truthy - all values that are not falsy

const value = {};
if (value) {
    console.log(` ${value} is TRUTHY`)
} else { console.log(` ${value} is FALSY`) }


const value2 = '';
if (value2) {
    console.log(` ${value2} is TRUTHY`)
} else { console.log(` ${value2} is FALSY`) }