// Define a function called 'pull_at_Index' that takes two parameters: an array `arr` and an array of indices 'pullArr'.
const pull_at_Index = (arr, pullArr) => {
    // Initialize an empty array to store removed elements.
    let removed = [];
    // Filter the array 'arr' based on the indices specified in 'pullArr'.
    let pulled = arr
        .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v)) // Push the elements at specified indices to 'removed' array.
        .filter((v, i) => !pullArr.includes(i)); // Filter out the elements at specified indices from 'arr'.
    // Clear the original array 'arr' and replace it with the filtered elements.
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    // Return the removed elements.
    return removed;
};

// Test cases
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3])); // Output: ['b', 'd']
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4])); // Output: [5]
