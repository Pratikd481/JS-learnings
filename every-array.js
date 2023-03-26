const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every((number) => number % 2 == 0);
console.log(ans);
//Call back should return boolean and every method also returns boolean

const products = [
    { productId: 1, productName: "P1", price: 300 },
    { productId: 2, productName: "P2", price: 3000 },
    { productId: 3, productName: "P3", price: 200 },
];

const isAllLessThan10K = products.every((product) => product.price < 100);
console.log(isAllLessThan10K);