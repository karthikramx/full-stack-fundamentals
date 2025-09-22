// Arrays!!!

const months = ['January', 'Feburary', 'March']
console.log(months[2])

// Replacing an element
months[2] = "test"
console.log(months)

months[4] = "adding a new item to the list";
console.log(months)

months[3] = "new item"
console.log(months)

// length of an array

const getArrayLength = (arr) => {
    console.log(arr.length)
}

getArrayLength(months)

// an array can store different tyles of elements
const arrTypes = ['Apple', { name: 'John' }, true, function () { console.log('hello'); return 'test' }]
const x = arrTypes[3]
console.log(x())

// looping through an array
for (let i = 0; i < arrTypes.length; i++) {
    console.log(arrTypes[i])
}

