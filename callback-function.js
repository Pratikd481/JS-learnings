/**
 In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked inside that function. The purpose of a callback function is to allow you to execute some code after another function has finished executing.
 */

//custom forach function implementation for array as example is the callback usecase
const users = [
    { firstName: "partha", lastName: "Das" },
    { firstName: "Pratik", lastName: "Das" },
];
//const users = { firstName: "partha", lastName: "Das" };

function pdForeach(users, callback) {
    if (!Array.isArray(users)) {
        throw  "1st paramete is not an array.";
    }
    for (let key in users) {
        callback(key, users[key]);
    }
}

pdForeach(users, (index, element) => {
    console.log(index);
    console.log(element);
});

