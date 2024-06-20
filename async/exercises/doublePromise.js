function double(num){
  return new Promise((resolve, reject)=>{
    resolve(num*2);
  })
}

function addTen(num){
  return new Promise(resolve => {
    resolve(num+10);
  })
}
function multiplyByThree(num){
  return new Promise(resolve => {
    resolve(num*3);
  })
}


double(5)
  .then(addTen)
  .then(multiplyByThree)
  .then(result => {
  console.log(result)
})
  .catch(error => {
  console.error(error);
})
