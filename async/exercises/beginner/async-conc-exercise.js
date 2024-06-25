const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];

async function fetchMultipleAPIs(apis) {
    try {
        const fetchData = async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network issues...")
            }
            const data = await response.json();

            return data;
        }

        const promises = apis.map(fetchData);

        return Promise.all(promises);

    } catch (error) {
        console.error(error)
    }
}

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });