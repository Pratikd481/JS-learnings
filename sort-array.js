//Sort methid sort characters or numbers accordint to the ASCII value
const numbers = [5, 9, 1200, 400, 300];
numbers.sort();
console.log(numbers);
//prints (5) [1200, 300, 400, 5, 9]

//Here javascript treats the numbers as a string and sorts according to the ASCII value.
const userNames = ["harsit", "abcd", "mohit", "nitish", "abcd", "ABC", "Harsit"];
userNames.sort();
console.log(userNames);
//(7) ['ABC', 'Harsit', 'abcd', 'abcd', 'harsit', 'mohit', 'nitish']

//Here ABC and Harsit comes first because ASCII value of A:65 and small a:97. Thats why capital A comes first after sorting

//If sort treats number as a character then how to sort numbers array in ascending or descending order ???
const numbers2 = [5, 9, 1200, 400, 300];
numbers2.sort((a, b) => {
    return a - b;
});
console.log(numbers2);
//prints (5) [5, 9, 300, 400, 1200]

numbers2.sort((a, b) => {
    return b - a;
});
console.log(numbers2);
//prints (5) [1200, 400, 300, 9, 5]

/**
a - b will sort in ascending order b - a will sort in descending order. How this works ???
a = 1200
b = 400
a - b = 800 it's positive thats why a and b with swap palce

if 
a - b is negetive the a and b will not swap the places
=========================================================================
 */

//========== Real world example of sort funciton ===============================
const products = [
    { productId: 1, productName: "P1", price: 300 },
    { productId: 2, productName: "P2", price: 3000 },
    { productId: 3, productName: "P3", price: 200 },
];

products.sort((a, b) => {
    return a.price - b.price;
});
console.log(products);
// This will sort the objects array according to the price but the problem is that it will change the product array directly. If we do not want to change the product array and keep the sorted array in new variable then we have to clone the products and then sort

const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);