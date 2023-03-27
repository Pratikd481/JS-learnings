/**
1. Map is an iterable
2. Store data in ordered fashion
3. Store key value pair ( Like Object )
4. Duplicate keys are not allowed like objects
====================================
Difference between map and objects 
->>> Objects can only have strings or symbol as key
in maps we can use anythisn as key like array, numbers stings
 */

const person = new Map();
person.set("firstName", "Pratik");
person.set("age", 27);
person.set(1, "One");
person.set("firstName", "Pratik");
console.log(person);

console.log(person.get("age"));
console.log(person.keys());

console.log("=====================");
for (let key of person.keys()) {
    console.log(key, typeof key);
}

// Real world use case
console.log("=====================");
const person1 = {
    id: 1,
    firstName: "Pratik",
};
const userInfo = new Map();
userInfo.set(person1, { age: 27, gender: "male" });

console.log(userInfo.get(person1).age);
