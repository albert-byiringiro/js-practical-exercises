const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];

function fetchMultipleAPIs(urls) {
    const promises = urls.map(url => fetch(url).then(response => response.json()));

    return Promise.all(promises);
}

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });