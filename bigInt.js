// We can add only same data type like two bigint
let bigNumber = BigInt(12); // one way of creating biging
let bigNumberByn = 123n; // second way of creating biging using n

console.log(bigNumber+bigNumberByn);

let intNumber  = 123;
console.log(bigNumber+intNumber); //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions