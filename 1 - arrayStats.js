function arrayStats(arr) {
    let arraySorted = [...arr].sort((a, b) => a - b);
    let sum = arraySorted.reduce((acc, curr) => acc += curr);
    let average = sum / arraySorted.length;
    let min = Math.min(...arraySorted);
    let max = Math.max(...arraySorted);

    return `\n{Sum: ${sum}, Average: ${average.toFixed(2)}, Min: ${min}, Max: ${max} }`
}

arrayStats([1, 2, 3, 4, 5]);
