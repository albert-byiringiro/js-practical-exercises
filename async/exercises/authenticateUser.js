function authenticateUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = fetch('https://jsonplaceholder.typicode.com/users');
            resolve(user);
        }, 1000);
    })
}

function adminProfileLoad(data){
    return Promise((resolve, reject)=>{
        return resolve(data);
    })
}

function userProfileLoad(data){
    return Promise((resolve, reject)=>{
        return resolve(data);
    })
}

authenticateUser().then((user)=>{
    return user.json;
})