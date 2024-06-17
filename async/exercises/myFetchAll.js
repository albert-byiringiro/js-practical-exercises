function myFetch(method, url, data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        // Set up the common handlers for both GET and POST
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`HTTP Error: ${xhr.status} and ${xhr.statusText}`));
            }
        };

        xhr.onerror = () => {
            reject('Network Error');
        };

        // Handle GET and POST specifics
        if (method === "GET") {
            xhr.send();
        } else if (method === "POST") {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        } else {
            reject(new Error('Unsupported HTTP method'));
        }
    });
}

// Usage examples:

// GET request
myFetch("GET", 'https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('GET Response:', response);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });

// POST request
myFetch("POST", 'https://jsonplaceholder.typicode.com/posts', {
    title: 'Me making progress',
    body: '# See what the Lord has done',
    userId: 1
})
    .then(response => {
        console.log('POST Response:', response);
    })
    .catch(error => {
        console.error('POST Error:', error);
    });
