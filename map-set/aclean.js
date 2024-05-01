function aclean(arr) {
    // split all waords and sort them
    // key-value pair collection for sorted words
    let map = new Map();

    for (let word of arr) {
        // split 
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))