/*
21. Create a function that performs an API request with exponential backoff retry strategy.

*/
// function to perform an API request with exponential backoff retry strategy
async function exponentialBackoffFetch(url, options = {}, maxRetries = 5, maxBackOff = 64000) {

    // helper function to wait for the delay from backoff algorithm

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function fetchWithRetry(attempt) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }
            return response.json();
        } catch (error) {
            // check if attemps are greater than max retries
            if (attempt >= maxRetries) {
                throw new Error(`Max retries reached...`)
            }

            // calculate the delay using exponential backoff strategy
            const delay = Math.min(Math.pow(2, attempt) + Math.floor(Math.random() * 1000), maxBackOff);

            // log the retry attempt and delay time
            console.log(`attempt ${attempt + 1} failed. Retrying in ${delay}ms...`)

            // pause the program for exponential backoff strategy delay time
            await wait(delay);

            return fetchWithRetry(attempt + 1);
        }
    }

    return fetchWithRetry(0);
}


// example using this:

exponentialBackoffFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));