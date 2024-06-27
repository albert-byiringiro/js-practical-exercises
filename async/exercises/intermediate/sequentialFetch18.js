/*
18. Write an `async` function that fetches data from two APIs sequentially using `await`.

*/
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Fetch error on ${url}: ${error.message}`);
    }
}

async function sequentialFetch(u1, u2) {
    try {
        const data1 = await fetchData(u1);
        console.log('Data from first API:', data1);

        const data2 = await fetchData(u2);
        console.log('Data from second API:', data2);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage
sequentialFetch('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2');
