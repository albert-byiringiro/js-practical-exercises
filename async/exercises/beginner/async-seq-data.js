// 18. Write an `async` function that fetches data from two APIs sequentially using`await`.


async function sequentailFetchData(url1, url2) {
    try {
        const response1 = await fetch(url1);
        const data1 = await response1.json();

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        return [data1, data2];
    } catch (error) {
        console.error(error)
    }
}

sequentailFetchData('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2').then(data => {
    console.log(data)
}).catch(error => {
    console.error(error)
})