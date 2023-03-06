//Var can be used before declaration because of hoisting 
console.log(test); // prints undefined
var test =  'test';
console.log(test); //prints test

//Can't use let variable before declaraion 
// console.log(test); //let-keyword.js:7 Uncaught ReferenceError: Cannot access 'test' before initialization
// let test =  'test';
// console.log(test);