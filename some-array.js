const products = [
    { productId: 1, productName: "P1", price: 300 },
    { productId: 2, productName: "P2", price: 3000 },
    { productId: 3, productName: "P3", price: 200 },
];
//if any of the item satisfies the condition in the callback function then it returns true

const isAnyProductLessThan500 = products.some(product=>product.price<500);
console.log(isAnyProductLessThan500);