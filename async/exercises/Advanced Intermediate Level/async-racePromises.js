// generic async function for fetching data
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error! Status:${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function promiseToRace(urls) {
    const promises = urls.map((url) => fetchData(url));
    return Promise.race(promises)
}

const urls = ['https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/4', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/5'];

promiseToRace(urls).then(data => console.log(data)).catch(error => console.error(error))
