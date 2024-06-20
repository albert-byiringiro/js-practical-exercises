
// function to create a cancellation token and a cancel function
function createCancellationToken() {
    let cancel;

    // create a promise that will never resolve, but can be rejected
    const token = new Promise((_, reject) => {
        // assign the reject function to cancel so it can be called later to reject the token
        cancel = () => reject(new Error('Cancelled'));
    });

    // return both the token and the cancel function
    return { token, cancel };
}

// function to simulate fetching data with support for cancellation
function fetchData(cancellationToken) {
    return new Promise((resolve, reject) => {
        // simulate a network delay of 3 seconds
        setTimeout(() => {
            resolve("Data fetched");
        }, 3000);

        // listen for the cancellation token being rejected
        cancellationToken.token.catch(() => {
            // if the token is rejected, reject the main promise with a cancellation error
            reject(new Error('Operation cancelled'));
        })
    })
}

// create the cancellation token and its corresponding cancel function
const { token, cancel } = createCancellationToken();

// initiate the data fetching process, passing the cancellation token
const fetchPromise = fetchData({ token });

// simulate a user cancelling the operation after 1.5 seconds
// setTimeout(()=>{
//   cancel();
// }, 1500);


// Handle the result or cancellation of the fetch operation
fetchPromise
    .then(data => console.log(data))
    .catch(error => console.error(error.message));