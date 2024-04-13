let ob = {
    Company: "The Gym",
    Address: "Noida",
    contact: +91 - 999999999,
    mentor: {
        HTML: "GFuG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};


const flatt = (obu) => {
    let result = {};
    for (const i in obu) {
        if ((typeof obu[i]) === 'object' && !Array.isArray(obu[i])) {
            let innerObject = flatt(obu[i]);
            for (const j in innerObject) {
                result[j] = innerObject[j];
            }
        } else {
            result[i] = obu[i];
        }
    }

    return result;
}

console.log(flatt(ob))