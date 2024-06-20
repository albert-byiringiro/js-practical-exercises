/* 5. Create a Promise that rejects with "Error!" after 2 seconds. Handle the error using `.catch()`.


const rejectIn2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject(new Error("Error!"));
  }, 2000)
})

rejectIn2.catch(error => {
  console.error(error)
})
*/
