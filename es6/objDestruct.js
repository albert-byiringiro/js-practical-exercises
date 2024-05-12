/*

Destructuring Challenge: You're building a user profile system. Create a function extractProfile(user) that takes an object user with properties name, age, city, and occupation (optional). Using destructuring, return a new object containing only the name and city properties.

*/

// dfine function extractProfile(user)
// return a new object of name and city

function extractProfile(user) {
    const { name, city } = user;
    return { name, city };
}

console.log(extractProfile({ name: "albert", age: 12, city: "Tokyo", occupation: "dev" }))