// Exercise: Create a function that demonstrates the difference in execution time between sequential and parallel execution of two async tasks.

// Solution
async function task1() {
    await delay(500);
    return "Task 1";
}

async function task2() {
    await delay(500);
    return "Task 2";
}

async function sequential() {
    const result1 = await task1();
    const result2 = await task2();
    return [result1, result2];
}

async function parallel() {
    const results = await Promise.all([task1(), task2()]);
    return results;
}

async function compareExecution() {
    console.time("Sequential");
    await sequential();
    console.timeEnd("Sequential");

    console.time("Parallel");
    await parallel();
    console.timeEnd("Parallel");
}

compareExecution();
// Logs:
// Sequential: ~2000ms
// Parallel: ~1000ms
