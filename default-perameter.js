//Old way of defining default variable
function addTwoOld(a, b) {
    if (typeof b == "undefined") {
        b = 0;
    }
    return a + b;
}

console.log(addTwoOld(1, 3));

// new way of defining default variable
function addTwonew(a, b = 0) {
    return a + b;
}

console.log(addTwoOld(1));
