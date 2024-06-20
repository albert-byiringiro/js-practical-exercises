/*
10. Create a Promise that resolves with "Data fetched" after 1 second and log the message when it resolves.

const promises = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('Data Fetched')
  }, 1000)
})

promises
  .then(message => console.log(message))
  .catch(error => console.error('Error:', error))
*/
