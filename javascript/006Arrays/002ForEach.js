// For Each

// the traditional and unclean way
let names = ["karthik", "manas", "chaya", "raja"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// the new way using For Each!
names.forEach((value, index) => {
    console.log(value, index)
})

