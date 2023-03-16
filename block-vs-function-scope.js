/**
In JavaScript, variables have different scopes depending on how they are declared. Variables declared using the var keyword have function scope, while variables declared using let or const have block scope.

Function scope means that variables declared inside a function are only accessible within that function and any nested functions. For example:
*/
function example() {
    var x = 1;
    if (true) {
        var y = 2;
    }
    console.log(x); // 1
    console.log(y); // 2
}
example();

/**
In this example, x is declared inside the example function, so it is accessible throughout the function. y is declared inside a block (the if statement), but since it uses the var keyword, it is also accessible outside of the block.

Block scope means that variables declared inside a block (such as a loop or an if statement) are only accessible within that block. For example:
 */

function example() {
    let x = 1;
    if (true) {
        let y = 2;
        console.log(x); // 1
        console.log(y); // 2
    }
    console.log(x); // 1
    console.log(y); // ReferenceError: y is not defined
}
example();

/**
In this example, x is declared inside the example function with the let keyword, so it has block scope and is only accessible within the function. y is also declared inside a block (the if statement), but since it uses the let keyword, it is only accessible within that block.

So, in summary, variables declared with var have function scope, while variables declared with let or const have block scope. It's generally recommended to use let or const instead of var to avoid unexpected behavior due to variable hoisting and function scoping.
*/