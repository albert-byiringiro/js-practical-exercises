// Write a function that uses `Promise.all` to wait for multiple Promises to resolve and then logs the results.

async function waitina(urls) {
    // const promises = urls.map(url => fetch(url).then(response=>response.json()));

    // return Promise.all(promises);

    const fetchData = async (url) => {
        const response = await fetch(url);
        return response.json();
    }

    const results = Promise.all(urls.map(fetchData))

    return results;
}

const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/1']

waitina(urls)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })