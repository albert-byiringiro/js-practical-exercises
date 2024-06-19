// Exercise: Create two async functions, one that returns a first name and another that returns a last name. Chain them to return the full name.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function firstName() {
    await delay(1000)
    return "Ineza"
}

async function lastName() {
    await delay(1000)
    return "Y'Imana"
}

async function fullName() {
    const first = await firstName();
    const last = await lastName();
    return `${first} ${last}`;
}

fullName().then(name => console.log(name))