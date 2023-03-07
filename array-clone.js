/*
In JavaScript, there are several ways to clone an array, which means creating a copy of an existing array. Cloning an array is useful in situations where you want to create a new array that has the same elements as an existing array, but you don't want to modify the original array. Here are some different ways to clone an array in JavaScript:
*/

//Using the spread operator:
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = [...originalArray];
const wrongCloneArray = originalArray;
originalArray.push(6);
console.log("originalArray", originalArray);
console.log("clonedArray before push", clonedArray);
console.log("wrongCloneArray", wrongCloneArray);

//Using the slice() method:
const originalArray2 = [1, 2, 3, 4, 5];
const clonedArray2 = originalArray2.slice(0);
originalArray2.push(6);
console.log("originalArray2", originalArray2);
console.log("clonedArray2 before push", clonedArray2);

//Using the Array.from() method:
const originalArray3 = [1, 2, 3, 4, 5];
const clonedArray3 = Array.from(originalArray3);
originalArray3.push(6);
console.log("originalArray3", originalArray3);
console.log("clonedArray3 before push", clonedArray3);

//Using the concat() method:
const originalArray4 = [1, 2, 3, 4, 5];
const clonedArray4 = [].concat(originalArray4);
originalArray4.push(6);
console.log("originalArray4", originalArray4);
console.log("clonedArray4 before push", clonedArray4);
