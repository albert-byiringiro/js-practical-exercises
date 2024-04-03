/*
You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.
*/

function oddSquares(array) {
    let arr = [...array];
    return arr.filter((num) => num % 3 === 0).map((odd) => odd * 2);
}

console.log(oddSquares([1, 4, 9, 16]));

//