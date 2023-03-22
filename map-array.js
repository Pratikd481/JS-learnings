const users = [
    { firstName: "Pratik", age: 27 },
    { firstName: "Partha", age: 25 },
    { firstName: "Pankaj", age: 26 },
];
const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);
