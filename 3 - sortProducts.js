/*

You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order.

*/

function sortProducts(array) {
    return array.sort((x, y) => x.price - y.price);
    }
    
    const products = [
    { name: "ibijumba", price: 100 },
    { name: "ibirayi", price: 200 },
    { name: "ibitoki", price: 30 },
    ];
    
    console.log(sortProducts(products))