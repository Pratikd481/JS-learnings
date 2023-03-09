//dot notation only works with valid JavaScript identifiers, while bracket notation can use any string as an index. For example:
const obj = { "foo-bar": "baz" };
console.log(obj["foo-bar"]); // Output: baz
//console.log(obj.foo - bar); // Output: Uncaught ReferenceError: bar is not defined

//If we want to use dynamic key  name for object then  we have to use bracket notation for example:
const key = "email"; // Dyanamic key
const person = {
    name: "Pratik",
    age: "27",
};
person[key] = "pratikd481@gmail.com";
console.log(person);
