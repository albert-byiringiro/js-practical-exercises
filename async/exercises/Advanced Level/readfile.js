const fs = require('fs');
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFilePromise('example.txt')
    .then(content => console.log(content))
    .catch(error => console.error(error));
