/**
 In JavaScript, lexical scope refers to the way variables are scoped based on where they are declared in the code. When a variable is declared inside a function, it is only accessible within that function and any functions nested inside it (i.e. functions defined within that function). This is because JavaScript uses a concept called "lexical scoping" to determine the scope of variables.

Lexical scoping means that the scope of a variable is determined by its location in the source code at the time the code is written, rather than at the time the code is executed. This means that when a function is defined, it has access to all the variables that are in scope at the point where it is defined, even if those variables are no longer in scope when the function is actually executed.
 */

function outerFunction() {
    const outerVariable = "I'm in outerFunction";

    function innerFunction() {
        const innerVariable = "I'm in innerFunction";
        console.log(outerVariable); // Logs "I'm in outerFunction"
    }

    innerFunction();
}

outerFunction();
/**
 In this example, outerVariable is declared in outerFunction, and innerVariable is declared in innerFunction. innerFunction has access to outerVariable because it is declared in the same lexical scope as innerFunction, but not vice versa.

Overall, understanding lexical scope is important for writing maintainable and bug-free code in JavaScript, as it helps you ensure that your functions have access to the variables they need to work correctly.
 */
