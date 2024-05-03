// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.


// Define a function called `matches` that takes two objects as arguments and checks if the first object contains all the key-value pairs of the second object.
const objectMathes = (obj1, obj2) => {
    // get the keys of second object
    return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

console.log(objectMathes({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(objectMathes({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(objectMathes({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
