// Convert a number into an array of its digits.
// Define a function called `digitize` that takes a number `n`.
const digitize = n =>
    // Convert the number to a string, then split it into an array of characters.
    [...`${n}`]
        // Map each character to its corresponding integer value.
        .map(i => parseInt(i));

// Test cases
console.log(digitize(123)); // Output: [1, 2, 3]
console.log(digitize(1230)); // Output: [1, 2, 3, 0]
