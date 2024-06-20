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
