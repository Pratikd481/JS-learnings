const person = {
    name: "Pratik Das",
    age: 27,
    email: "pratikd481@gmail.com",
};

// For in loop
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}
console.log("====================");
// for of loop
for (let key of Object.keys(person)) {
    console.log(`${key} : ${person[key]}`);
}
