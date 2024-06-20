
/*
8. Create a simple callback function that multiplies two numbers and then calls a callback with the result.

// Function that multiplies two numbers and then calls a callback with the result
function multiplyAndCallback(num1, num2, callback) {
  const result = num1 * num2; // Multiply the numbers
  callback(result); // Call the callback function with the result
}

// Callback function to handle the result
function handleResult(result) {
  console.log(result); // Log the result to the console
}

// Test cases
multiplyAndCallback(2, 4, handleResult); // Expected output: 8
multiplyAndCallback(-3, 5, handleResult); // Expected output: -15
multiplyAndCallback(0, 100, handleResult); // Expected output: 0
multiplyAndCallback(7, 7, handleResult); // Expected output: 49


*/
