const xhr = new XMLHttpRequest();

xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // handle successfull response
        console.log(xhr.responseText);
    } else {
        console.error('HTTP error:', xhr.status, xhr.statusText);
    }
};

xhr.onerror = function () {
    // handle network errors
    console.log('Network Error');
}

xhr.send();