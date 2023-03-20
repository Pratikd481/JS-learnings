const person = {
    firstName: "Pratik",
    gender: "Male",
    age: 27,
};

function printDettailWithoutDestructuring(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
}

printDettailWithoutDestructuring(person);
console.log("====================");
function printDettailWithDestructuring({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
}
printDettailWithDestructuring(person);
