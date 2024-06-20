
const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
  return new Promise(resolve => setTimeout(() => {
    const data = fetch(url).then(response => response.json()).then(data => resolve(data))
  }, delay));
};

const data1 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/1', delays[0]);
const data2 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/2', delays[1]);
const data3 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/3', delays[2]);

// promise all 
Promise.all([data1, data2, data3])
  .then(response => {
    console.log('All data fetched:', response)
  })


// promise race
Promise.race([data1, data2, data3])
  .then(response => {
    console.log('This is the fastest:', response)
  })
