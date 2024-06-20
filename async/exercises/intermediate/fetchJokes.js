function fetchJokes(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network issues while fetching jokes");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("There's a problem in fetching data"));
}

fetchJokes('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');