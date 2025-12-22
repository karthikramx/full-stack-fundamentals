
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// get the length of the string - do it in a function 
const getStringLength = (guestListString) => {
    return guestListString.length
}

console.log(getStringLength(guestList))

// upper case the string
console.log(guestList.toUpperCase())

// check if ETHAN is in the list 
console.log(guestList.toUpperCase().includes('ETHAN'))

// Create a substring of guest names
let guests = guestList.split(':')[1].trim()
console.log(guests)

// Create an array of guest names
arrayGuests = guests.toUpperCase().split(',')
console.log(arrayGuests)