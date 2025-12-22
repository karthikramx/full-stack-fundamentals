// Array Filter
// can create a new list of items when it passes a new test

var numbers = [-10, 0, -2, 15, -36, 25]
const newList = numbers.filter(num => num >= 0)
console.log(newList)

// Second example
let cities = [
    { name: 'Los Angeles', population: 2200000 },
    { name: 'New York', population: 8000000 },
    { name: 'Chicago', population: 6900098 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1535079 }
];

const filtCities = cities.filter(city => city.population > 6000000);
console.log(filtCities)