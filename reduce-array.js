/**
 The reduce() method in JavaScript is used to iterate over an array and accumulate a single value based on the elements of the array. It takes two parameters: a callback function and an optional initial value.

The callback function is called for each element of the array, and it takes four parameters: an accumulator (which holds the value returned from the previous iteration), the current element being processed, the index of the current element, and the array that reduce() was called upon. The callback function should return the new value of the accumulator after processing the current element.

If an initial value is provided as the second argument to reduce(), the accumulator will be initialized to that value. If no initial value is provided, the first element of the array will be used as the initial value, and the iteration will start from the second element.
 */

const userCart = [
    { productId: 1, productName: "Mobile", price: 10000 },
    { productId: 2, productName: "Laptop", price: 50000 },
    { productId: 2, productName: "Tv", price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);