// Array Methods
const names = ["Jon", "Bob", "David"];

// array.push(value)
names.push("test")
console.log(names)

// array.pop() - removes the last item in the list 
const poppedItem = names.pop()
console.log(poppedItem)
console.log(names)

// array.shift() - removes the first element in an array
const shiftedItem = names.shift()
console.log(shiftedItem)
console.log(names)

// array.unshift(value) - adds a new item to the beginning of an exisintg array
// returns length of new arry
const lengthOfArry = names.unshift("test")
console.log(lengthOfArry)
console.log(names)

// array.splice(start, deleteCount, ...items)
// Adds or removes elements from any position in an array.
names.splice(1, 0, "Jenny");
console.log(names);

// array.slice(start, end)
names.push(...["test1", "test2"])
const slicedArray = names.slice(1, 3)
console.log(slicedArray)

// Advanced Array Items 
// concat(...items)
const allNames = names.concat(["itemx", "itemy"])
console.log(allNames)

// lastIndexOf(item, pos)
console.log(allNames.lastIndexOf("test2"))

// includes(value)
console.log(allNames.includes("test2"))

// find(func) - returns the first element for which fucn returns a truthy value. 
const foundName = names.find(name => name.startsWith("t"));
console.log(foundName)

// filter(func) - filters elements through func, returning all values that make it return true
const filteredNames = names.filter(name => name.length > 4)
console.log(filteredNames)

// findIndex(func) - Like find, but returns the index of the first matched element
const indexOfT = names.findIndex(name => name.startsWith("t"))
console.log(indexOfT)

// forEach
names.forEach(name => console.log(name.toUpperCase()))

// map(func)
const upperNames = names.map(name => name.toUpperCase())
console.log(upperNames)

// sort(func)
names.sort();
console.log(names)

// reverse()
names.reverse()
console.log(names)

// split(by)
const testString = "karthik.ram.test"
console.log(testString.split("."))

// join(by)
const test = ["test1", "test2", "test3", "test4"]
console.log(test.join("@"))

// reduce(func, initialValue)
const numbers = [1, 2, 3, 4]
console.log(numbers.reduce((acc, num) => acc + num, 0))

// some(func) - returns true if any element passes the test implemented by func
const hasShortName = names.some(name => name.length < 4);
console.log(hasShortName);

// every(func) - returns true if all elements pass the test implemented by func
console.log(names.every(name => name.length > 2))

// clear


