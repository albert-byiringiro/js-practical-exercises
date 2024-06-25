/*
9. Write a function that makes an asynchronous request using `XMLHttpRequest` and logs the response.

function xhrReq(url){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  xhr.onload = function(){
    if(xhr.status === 200){
      console.log(xhr.responseText)
    } else {
      console.error(`HTTP error: ${xhr.status}, ${xhr.statusText}`);
    }
  }
  
  xhr.onerror = function(){
    console.error("Network Error");
  }
  
  xhr.send();
}

xhrReq()

*/


/*
Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.



function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.responseText)
      } else {
        reject(`HTTP Error: ${xhr.status} - ${xhr.statusText}`);
      }
    }

    xhr.onerror = () => {
      reject(`Network error`)
    }

    xhr.send();
  });
}

myFetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error))
*/

// POST request

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", 'application/json');

    // the data
    const datum = {
      "userId": 1,
      "id": 101,
      "title": "God's been so good...",
      "completed": true
    };

    // serialize the data
    const jsonData = JSON.stringify(datum);

    xhr.onload = () => {
      if (xhr.status >= 200) {
        resolve(xhr.responseText)
      } else {
        reject(`HTTP Error: ${xhr.status} - ${xhr.statusText}`);
      }
    }

    xhr.onerror = () => {
      reject(`Network error`)
    }

    xhr.send(jsonData);
  });
}

myFetch('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log(data))
  .catch(error => console.error(error))