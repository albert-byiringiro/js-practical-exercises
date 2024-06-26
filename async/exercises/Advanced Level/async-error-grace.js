/*
30. Write a function that handles errors gracefully in a sequence of asynchronous operations using Promises.

*/

async function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Result of asyncOperation1'), 1000);
    });
}

async function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Error in asyncOperation2')), 1000);
    });
}

async function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Result of asyncOperation3'), 1000);
    });
}

async function handleAsyncOperations() {
    try {
        const result1 = await asyncOperation1();
        console.log(result1);

        const result2 = await asyncOperation2();
        console.log(result2);

        const result3 = await asyncOperation3();
        console.log(result3);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

handleAsyncOperations();
