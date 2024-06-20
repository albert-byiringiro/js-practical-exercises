
/* 7. Write an asynchronous function using `async`/`await` to fetch and log data from an API.

async function fetchData(url){
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(error){
    throw new Error("Network Issues while fetching")
  }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')

*/ 
