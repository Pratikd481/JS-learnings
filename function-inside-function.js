function app() {
    const myFunc = () => {
        console.log("Hello from myfunc.");
    };

    const addTwo = (num1, num2) => {
        return num1 + num2;
    };

    const mul = (num1, num2) => num1 * num2;

    console.log("Insile app.");
    myFunc();
    console.log(addTwo(2, 3));
}
app();
