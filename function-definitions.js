//In JavaScript, there are three ways to define a function:

//1. Function Declaration:
/**
 * The most common way to define a function is using a function declaration. It starts with the function keyword followed by the name of the function, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces. Here's an example:
 */

function singSong() {
    console.log("Singing..");
}
singSong();

//2. Function Expression:
/**
 * Another way to define a function is by using a function expression. In this case, the function is assigned to a variable. The syntax for a function expression is similar to a function declaration, but without the function name. Here's an example:
 */

const singNewSong = function () {
    console.log("Singing..");
};
singNewSong();

//3. Arrow Function:
/**Arrow functions were introduced in ES6 and provide a more concise syntax for defining functions. They are similar to function expressions, but use the => arrow operator instead of the function keyword. Here's an example: */
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));

// Single line return statement
const substract = (a, b) => a - b;

console.log(substract(3, 2));

//The main differences between these three types of function definitions are:
/**

Function declarations are hoisted to the top of the scope, so they can be called before they are defined. 

Function expressions and arrow functions are not hoisted.

Function declarations have a function name, which is useful for debugging and recursion. Function expressions and arrow functions can be anonymous or have a variable name assigned to them.

Arrow functions have a more concise syntax and a lexical this binding, which means that this inside an arrow function is the same as this in the enclosing scope. Function declarations and expressions have a dynamic this binding, which means that this inside the function can change depending on how it is called. */
