function downloadContents(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error("Oops! We are not online")
        } else {
          return response.json();
        }
      }).then(data => resolve(data)).catch(error => reject(error))
    })
  });

  return Promise.all(promises)
}

// Usage example:
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

downloadContents(urls)
  .then(contents => {
    console.log('Downloaded contents:', contents);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

function fetchMultipleAPIs(urls) {
  const promises = urls.map(url => fetch(url).then(response => response.json()));

  return Promise.all(promises);
}

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
