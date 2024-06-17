function myFetch(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`HTTP Error: ${xhr.status} and ${xhr.statusText}`));
            }
        };

        // on network issues
        xhr.onerror = () => {
            reject('Network Error');
        }

        xhr.send();
    });
}

myFetch("GET", 'https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    })


