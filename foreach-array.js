const numbers = [4, 2, 5, 8];

function myFunc(number, index) {
    console.log(`index is ${index} number is ${number}`);
}

//numbers.forEach(myFunc);

numbers.forEach(function (number, index) {
    console.log(`index is ${index} number is ${number}`);
});

const users = [
    { firstName: "Pratik", age: 27 },
    { firstName: "Partha", age: 25 },
    { firstName: "Pankaj", age: 26 },
];
users.forEach((user) => {
    console.log(user.firstName);
});
