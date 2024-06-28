function timeoutHandler(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Promise timed out..."))
        }, ms);
    })

    return Promise.race([promise, timeout])
}

const examplePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Promise Resolution...`);
    }, 1500);
})

timeoutHandler(examplePromise, 1000)
    .then((data) => console.log(data))
    .catch((error => console.error(error)))