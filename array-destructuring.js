const myArray = ["value1", "value2", "value3"];

//Array destructuring uses square brackets [] on the left-hand side of the assignment operator (=).
const [myVar1, myVar2, myVar3] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log("=================================");
//You can also use destructuring to skip elements of an array. For example:
const [, , third] = [1, 2, 3];
console.log(third); // output: 3

//You can use default values when destructuring an array, in case the array element is undefined or missing. For example:
{
    console.log("=================================");
    const [first = 0, second = 0, third = 0] = [1, 2];
    console.log(first);
    console.log(second);
    console.log(third);
}

//You can use destructuring with the rest parameter (...) to capture the remaining elements of an array into a new array. For example:
console.log("=================================");
const [testVar2, ...myNewVar] = myArray;
console.log(testVar2);
console.log(myNewVar);

//You can use destructuring to swap values between variables without using a temporary variable. For example:
console.log("=================================");
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//You can use nested destructuring to extract values from nested arrays. For example:
{
    console.log("=================================");
    const [first = 0, [second = 0, third = 0]] = [1, [2,3]];
    console.log(first);
    console.log(second);
    console.log(third);
}
