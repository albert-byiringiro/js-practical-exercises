/*
11. Write a function that chains two Promises together, where the second Promise depends on the result of the first.

function promise1(){
  return new Promise((resolve, reject)=>{
    resolve("My name is: ")
  })
}

function promise2(data){
  return new Promise((resolve, reject)=>{
    resolve(data + "Albert Byiringiro")
  }) 
}

function promiseHandler(promise1, promise2){
  promise1().then((response)=>{
    return promise2(response)
  }).then((data)=>{
    console.log(data);
  }).catch(error => console.error(error))
}

promiseHandler(promise1, promise2)

*/


/*
12. Create an `async` function that performs three asynchronous operations sequentially and logs the result of each.
input: three asynchronous operations
output: logs the result of each

const asy1 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Come thou fount of every blessing")
  }, 3000)
})

const asy2 = ()=>{
  return new Promise((resolve)=>{
      queueMicrotask(() => {
  console.log("Guess When!")
        resolve("async finished")
});
  })
}

const asy3 = (url)=>{
  fetch(url)
    .then(response => {
    if(!response.ok){
      throw new Error("Network Issues");
    }
    return response.json();
  })
    .then(data => {
    console.log(data);
  })
}




async function seqResult(p1, p2, p3){
  const as1 = await p1;
  console.log(as1);
  
  const as2 = await p2();
  console.log(as2);
  
  const as3 = await p3('https://jsonplaceholder.typicode.com/todos/1');
  console.log(as3);
}

seqResult(asy1, asy2, asy3)
*/


/*
13. Using Promises, write a function that makes two API requests in parallel and logs both results.

function parallelFun(url1, url2){
  const request1 = fetch(url1).then(response => {
    if(!response.ok){
      throw new Error("Network issue...")
    }
    return response.json();
  });
  
  const request2 = fetch(url2).then(response => {
    if(!response.ok){
      throw new Error("Network issue...")
    }
    return response.json();
  });
  
  Promise.all([request1, request2])
    .then(result => {
    console.log("Result of the API Request", result)
  })
    .catch(error => {
    console.error(error);
  })
  
}

parallelFun('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2')


function parallelFun(urls){
 const fetchData = urls.map(url => fetch(url).then(response => response.json()));
  Promise.all(fetchData).then(data => {
    console.log(data)
  })
}

const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2'];

parallelFun(urls)
*/


/*
Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms
*/

/*

async function fetchDataWithTimeout(url, timeout = 10) {
  const controller = new AbortController();
  const signal = controller.signal;


  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId); // Clear the timeout if the request completes in time

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log(`Request to ${url} timed out after ${timeout} milliseconds`);
    } else {
      console.error(`Request to ${url} failed: ${err.message}`);
    }
  }
}

// Example usage with a 10ms timeout
const url = "https://api.chucknorris.io/jokes/random";
fetchDataWithTimeout(url, 1000).then(data => {
  if (data) {
    console.log(data);
  }
});


*/

let xhr = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/posts";
xhr.open("POST", url, true);

xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
        console.log("Response:", JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4) {
        console.error("Error:", xhr.statusText);
    }
};

xhr.onerror = function () {
    console.log("Network Error")
}

let data = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
});

xhr.send(data);