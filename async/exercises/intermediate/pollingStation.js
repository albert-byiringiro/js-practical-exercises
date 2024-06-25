async function getJoke(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if data has a 'jokes' property which is an array
        if (!data || !Array.isArray(data.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        // Find the joke by id
        const joke = data.jokes.find(j => j.id === jokeId);
        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        // Return an object with saySetup and sayPunchLine methods
        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchLine
        };
    } catch (error) {
        // Rethrow the error to maintain the promise chain
        throw error;
    }
}