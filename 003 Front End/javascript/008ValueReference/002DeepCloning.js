// Deep Cloning 


// method 1 
// JSON.parse(JSON.stringfy()) -> removes all refernece and reassigns addresses 

const testObject = {
    firstName: "karthik",
    lastName: "ram",
    age: 31,
    car: {
        color: "black",
        year: 2015,
        make: "vw",
        model: "jetta"
    }
}

const testObject2 = Object.assign({}, testObject)
testObject.car.color = "blue"
console.log(testObject2) // here we noticed that the color has changed 

// in order to deep copy / do a deep clonne we do the following
// stringify the json object and then parse it 

const testObject3 = JSON.parse(JSON.stringify(testObject))
testObject.car.color = "green"
console.log(testObject3) // car color should be blue