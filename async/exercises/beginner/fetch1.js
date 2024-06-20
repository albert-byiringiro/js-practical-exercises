/* 6. Using the Fetch API, write a function to fetch data from an API endpoint and log the response to the console.

function fetchData(url){
  return fetch(url)
    .then(response => {
    if(!response.ok){
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    return response.json();
  })
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then(json => console.log(json))
  .catch(error => console.error(`Fetch Error: ${error}`))
  
*/
