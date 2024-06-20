const url = 'https://api.github.com/user'; // GitHub API endpoint for user data

const token = 'your_personal_access_token'; // Replace with your GitHub Personal Access Token

const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `token ${token}`, // include the token in the authorization header
        'Accept': 'application/json'
    },
    credentials: 'same-origin' // To include cookies when on the same origin
};

fetch(url, requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not okay");
        }
        return response.json();
    })
    .then((data) => {
        console.log(`${data.name} Github information about you:`, data);
    })
    .catch(error => {
        console.error("Get Method fetch not working as excepted:", error);
    })