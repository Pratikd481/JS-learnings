/**
 * In JavaScript, reference data types are data types that hold a reference to a memory location.
 * where the data is stored. When you assign a reference data type to a variable,
 * the variable holds a reference to the memory location where the data is stored, 
 * rather than the actual data itself.

Arrays are a common reference data type in JavaScript. 
When you create an array and assign it to a variable, 
the variable holds a reference to the memory location where the array is stored.
*/

//Referance data type
let array1 = ["item1","item2"];
let array2  = array1;
console.log("Array1", array1);
console.log("Array2", array2);
array1.push("item2");
console.log("Array1", array1);
console.log("Array2", array2);


//Premitive data type
let test1 = 1;
let test2  = test1;
console.log("test1", test1);
console.log("test2", test2);
test1 = 5;
console.log("test1", test1);
console.log("test2", test2);

//Check the console if I update array1 then array2 also gets updated 
//but if I update test1 test2 is not updated because array is a referance datatype 
