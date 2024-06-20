const url = 'https://jsonplaceholder.typicode.com/posts';

const postData = {
    title: "Ineza y'Imana",
    body: 'Icyonzi nicyo Uwiteka yankoreye',
    userId: 1
}


const requestOptions = {
    method: "POST", // HTTP method
    headers: {
        'Content-Type': 'application/json' // content type
    },
    body: JSON.stringify(postData),
}

fetch(url, requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network issues while fetching')
        }
        return response.json();
    })
    .then((data) => {
        console.log(`POST requested succeeded with json data:`, data);
    })
    .catch(error => {
        console.error("Problem while fetching with POST method", error);
    })