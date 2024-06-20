function createAlarm(name, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 2) {
            reject(new Error("Delay is not sufficient"));
        } else {
            setTimeout(() => {
                resolve(`Wake up ${name}`);
            }, delay * 1000);
        }
    });
}

// Example usage:

createAlarm('John', 4)
    .then((message) => {
        console.log(message); // output "Wake up John" after 4 seconds
    })
    .catch((error) => {
        console.error(error.message);
    });

createAlarm('John', 1)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message); // output "Delay is not sufficient"
    });
