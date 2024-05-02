// Define a function called `random_hex_color_code` that generates a random hexadecimal color code.
const random_hex_color_code = () => {
    // Generate a random number and convert it to hexadecimal string representation.
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    // Return the hexadecimal color code with '#' appended.
    return '#' + n.slice(0, 6);
};

// Test the function
console.log(random_hex_color_code()); // Output: Random hexadecimal color code
