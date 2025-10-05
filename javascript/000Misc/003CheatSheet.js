// STRING METHODS
// Access a specific character in a string using its index
// Example: 'hello'[1] returns 'e'
const char = string[index];

// Get the total number of characters in a string
// Example: 'hello'.length returns 5
const length = string.length;

// Split a string into an array of words
// Example: 'hello world'.split(' ') returns ['hello', 'world']
const wordsArray = string.split(' ');

// Split a string into an array of characters
// Example: 'hello'.split('') returns ['h', 'e', 'l', 'l', 'o']
const charsArray = string.split('');

// Convert a string to lowercase
// Example: 'HELLO'.toLowerCase() returns 'hello'
const lowercased = string.toLowerCase();

// Convert a string to uppercase
// Example: 'hello'.toUpperCase() returns 'HELLO'
const uppercased = string.toUpperCase();

// Check if a substring exists within a string (case-sensitive)
// Example: 'hello'.includes('ell') returns true
const containsSubstring = string.includes('substring');

// ARRAY METHODS
// Access a specific element in an array using its index
// Example: [1, 2, 3][0] returns 1
const element = array[index];

// Find the index of the first occurrence of a value in an array
// Example: [1, 2, 3].indexOf(2) returns 1
const index = array.indexOf('value');

// Get the total number of elements in an array
// Example: [1, 2, 3].length returns 3
const arrayLength = array.length;

// Join all elements of an array into a string
// Example: ['h', 'e', 'l', 'l', 'o'].join('') returns 'hello'
const joinedString = array.join('');

// Add a value to the end of an array
// Example: [1, 2, 3].push(4) results in [1, 2, 3, 4]
array.push(value);

// Remove the last element from an array
// Example: [1, 2, 3].pop() results in [1, 2]
array.pop();

// Add a value to the beginning of an array
// Example: [1, 2, 3].unshift(0) results in [0, 1, 2, 3]
array.unshift(value);

// Remove the first element from an array
// Example: [1, 2, 3].shift() results in [2, 3]
array.shift();

// Remove elements from an array starting at a specific index
// Example: [1, 2, 3, 4].splice(1, 2) results in [1, 4]
array.splice(fromIndex, number_of_elements);

// Copy a portion of an array into a new array
// Example: [1, 2, 3, 4].slice(1, 3) returns [2, 3]
const slicedArray = array.slice(fromIndex, toIndex);

// LOOPING THROUGH ARRAYS
// Using a for loop to iterate over an array
const emojis = ['😀', '😆', '🙃', '😍'];
const wavingEmojis = [];

for (let i = 0; i < emojis.length; i++) {
    wavingEmojis.push(`👋${emojis[i]}👋`);
}

// Using forEach to iterate over an array
emojis.forEach((emoji) => console.log(emoji));

// Using map to transform each element in an array
const wavingEmojis = emojis.map((emoji) => `👋${emoji}👋`);

// Using filter to create a new array with elements that pass a test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBiggerThanFive = numbers.filter((number) => number > 5);

// Using sort to order elements in an array
const numbers = [3, 4, 1, 5, 4, 7, 2, 23, 12];
const sortedAscending = numbers.sort((a, b) => a - b);
const sortedDescending = numbers.sort((a, b) => b - a);

// VALUE VS REFERENCE
// Arrays and objects are reference types
const numbers = [1, 2, 3, 4]; // Reference #123asd
const anotherNumbers = numbers; // Same reference #123asd

anotherNumbers.push(5); // Modifies both arrays

const person = { firstName: 'John', lastName: 'Doe' };
const anotherPerson = person; // Same reference

anotherPerson.lastName = 'DOEEEE'; // Modifies both objects

console.log(numbers === anotherNumbers); // true
console.log(person === anotherPerson); // true

// CLONING ARRAYS AND OBJECTS
// Shallow cloning - one level deep
const original = [1, 2, 3];
const newOriginal = [...original]; // New reference

// Deep cloning - two levels deep
const users = [{ name: 'John', age: 25 }, { name: 'Victor', age: 25 }, { name: 'Adrian', age: 25 }];
const newUsers = JSON.parse(JSON.stringify(users)); // New reference