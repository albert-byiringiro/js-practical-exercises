const controller = new AbortController();
const signal = controller.signal;
const timeout = setTimeout(() => {
    controller.abort();
}, 5000);

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.log('Fetch Error :-S', error);
        }
    });
