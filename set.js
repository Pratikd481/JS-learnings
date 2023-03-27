/**
1. Set is a iterable
2. Store data
3. Set also has its own methods
4. No index-based access
5. Order is not gurranted
6. Unique items only ( No duplicates allowed )
 */
const numbers = new Set(); // We can pass any iterables within set
numbers.add(2);
numbers.add(5);

const items = ["item1", "item2"];
numbers.add(items);
numbers.add(5);

console.log(numbers);

// How to check a key is available or NOT ?
if (numbers.has(5)) {
    console.log(5 + " Is present");
} else {
    console.log(5 + " Is not present");
}

// We can use for of loop in Set
console.log("==============================");
for (const iterator of numbers) {
    console.log(iterator);
}

// Create a Set from Array
console.log("==============================");
const myArray = [1, 2, 3, 2, 9, 4, 4];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
