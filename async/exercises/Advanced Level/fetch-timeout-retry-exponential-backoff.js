/*
31. Create a Promise-based utility function to handle timeouts and retries for an API request.


*/
// function to fetch with timeout
function withTimeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject('Promise timed out...')
        }, ms);

        promise
            .then((value) => {
                clearTimeout(timer);
                resolve(value);
            }).catch(error => {
                clearTimeout(timer);
                reject(error);
            })
    })
}

// implement the delay method that will be used in exponential strategy
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

// utility function to handle timeout and retries
async function fetchWithRetry(url, options = {}, retries, timeout = 5000, backOffFactor = 2) {
    let delayTime = 1000;

    for (let i = 0; i < retries; i++) {
        try {
            const response = await withTimeout(fetch(url, options), timeout);
            if (!response.ok) {
                throw new Error('HTTP Error: Status:', response.status);
            }
            return response.json();
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            console.warn(`Retrying request... (${i + 1}/${retries}) after ${delayTime}ms`);
            await delay(delayTime);
            delayTime *= backOffFactor;
        }
    }
}

fetchWithRetry('https://jsonplaceholder.typicode.com/posts', {}, 4, 100)
    .then(data => console.log(data))
    .catch(error => console.error(`Failed to Fetch data:`, error))