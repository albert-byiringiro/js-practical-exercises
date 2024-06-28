/*Intermediate
20. Write a function that handles multiple asynchronous operations, ensuring they complete in a specific order using Promises.

*/
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Fetching Data Failed...");
    }
}

async function multipleAsync(urls) {
    const results = [];
    for (const url of urls) {
        try {
            const data = await fetchData(url);
            results.push({ status: 'Fulfilled', value: data });
        } catch (error) {
            results.push({ status: 'Rejected', reason: error });
        }
    }
    return results;
}

const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3'];

multipleAsync(urls)
    .then(data => console.log(data))
    .catch(error => console.log(error))