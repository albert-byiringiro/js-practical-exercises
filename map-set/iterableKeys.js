let map = new Map();

map.set("name", "john");
map.set("ribakare", "john");

let arrKeys = Array.from(map.keys());

arrKeys.push("more");

console.log(arrKeys)