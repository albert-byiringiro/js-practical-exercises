/*
22. Write an `async` function that uses `try`/`catch` to handle errors from multiple `await` calls.
*/
// create a function for fetch data

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
}

async function ret() {
    try {
        const urls = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'
        ];

        const fetchPromises = urls.map(url => fetchData(url));
        const results = await Promise.allSettled(fetchPromises);

        return results;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

ret()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });