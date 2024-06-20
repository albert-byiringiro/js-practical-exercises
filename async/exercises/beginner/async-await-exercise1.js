// Exercise: Modify the previous example to fetch the first name and last name in parallel.


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function getfirstName() {
    await delay(1000)
    return "Ineza"
}

async function getlastName() {
    await delay(1000)
    return "Y'Imana"
}

// first exercise
/*
async function fullName() {
    const first = await getfirstName();
    const last = await getlastName();
    return `${first} ${last}`;
}
*/

async function getFullName() {
    const [firstName, lastName] = await Promise.all([getfirstName(), getlastName()])
    return `${firstName} ${lastName}`;
}
getFullName().then(name => console.log(name))