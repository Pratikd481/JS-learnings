/**
 At first we are going to unserstand the problem we are facing with funcitonal
 programming
 */

console.log("============ Starting the ISSUE =====================");
const user1 = {
    firstName: "Pratik",
    lastName: "Das",
    age: 27,
    about: function () {
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function () {
        return this.age >= 18;
    },
};
console.log(user1.about());
/**
Now if we want to create multiple object same as above. 
Then we have to create a function to create object
 */

function createUserSample1(firstName, lastName, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = function () {
        return `${this.firstName} is ${this.age} year old`;
    };
    user.is18 = function () {
        return this.age >= 18;
    };
    return user;
}

const user2 = createUserSample1("Partha","Das", 24);
console.log(user2.about());
const user3 = createUserSample1("Pankaj","Sarkar", 24);
console.log(user3.about());

// Now if we console.log user2 and user3 we will found the issue
console.log(user2);
console.log(user3);
//Full function about and is18 is copied in the memory everytime we are 
//creating a user usngi this function
console.log("============ Edning the ISSUE =====================");




