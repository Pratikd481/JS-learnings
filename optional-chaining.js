const user = {
    firstName: "Pratik",
};

console.log(user.firstName); // Pratik
console.log(user?.address?.houseNumber); // undefined
console.log(user.address.houseNumber); // optional-chaining.js:7 Uncaught TypeError: Cannot read properties of undefine
