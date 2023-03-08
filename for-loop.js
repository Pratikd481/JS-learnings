const fruits = ["apple","mango","graps"];
for (const fruit of fruits) {
    console.log(fruit);
}
console.log("=====================");
for (const key in fruits) {
     console.log(key);
     console.log(fruits[key]);
}