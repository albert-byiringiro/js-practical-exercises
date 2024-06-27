// 29. Create a function that uses `Promise.allSettled` to handle multiple Promises and log their outcomes.
function promise1() {
    return new Promise((resolve, result) => {
        resolve("first me...")
    })
}

function promise2() {
    return new Promise((resolve, result) => {
        resolve("second me...")
    })
}

function promise3() {
    return new Promise((resolve, result) => {
        reject("Not today...");
    })
}

Promise.allSettled([promise1(), promise2(), promise3()])
    .then((results) => {
        // console.log(results)
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled: ${result.value}\n`)
            } else {
                console.log(`Promise ${index + 1} rejected: ${result.reason}\n`)
            }
        })
    })
    .catch(error => console.error(error))