const products = [
    { productId: 1, productName: "P1", price: 300 },
    { productId: 2, productName: "P2", price: 3000 },
    { productId: 3, productName: "P3", price: 200 },
];

const myProduct = products.find((product) => {
    return (product.price = 200);
});

console.log(myProduct);