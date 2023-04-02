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

const user2 = createUserSample1("Partha", "Das", 24);
console.log(user2.about());
const user3 = createUserSample1("Pankaj", "Sarkar", 24);
console.log(user3.about());

// Now if we console.log user2 and user3 we will found the issue
console.log(user2);
console.log(user3);
//Full function about and is18 is copied in the memory everytime we are
//creating a user usngi this function
console.log("============ Edning the ISSUE =====================");

// So how we can overcome this issue ????
console.log("============ Starting solution  1 =====================");
//Solution 1-------- Store methods in different object
const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function () {
        return this.age >= 18;
    },
};

function createUserSample2(firstName, lastName, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user4 = createUserSample1("user4", "Das", 24);
console.log(user4.about());
const user5 = createUserSample1("user5", "Sarkar", 24);
console.log(user5.about());
//But this solution has another problem. If we want to add new methid in the user method object then to use that methid we have to add that in createUser funciton also. We might forget to add new method referenct in the createUser funciton
console.log("============ Ending solution  1 =====================");






// To solbe this issue we need to use __proto__ or [[prototype]]
console.log("======== Understanding __proto__ or [[prototype]]===================");
const obj1 = {
    key1: "Value1",
    key2: "Value 2",
};
console.log(obj1);
console.log("Obj1 proto :", obj1.__proto__);

const obj2 = Object.create(obj1);
obj2.key3 = "Value3";
//The abobe line will crate an empty object obj2 but it will set obj1 as a __proto__ /[[prototype]] of obj2.

console.log(obj2);
console.log("Obj2 proto :", obj2.__proto__);

//Advantage of using __proto__
// we can access keys of obj1 from obj2
console.log("obj1 key accessed throught obj2: ",obj2.key1);
console.log(obj2.key3);
//Now if we want to access key3 through obj1. We can't becaue obj1 doesnot has obj2 as a __proto__
console.log("obj2 key accessed throught obj1: ",obj1.key3);

// How this works ??
// If we are trying to access a key of a obect which is not available in the object the it will check for the key in its __proto__. If key present in its __proto__ then it will print that.

console.log("======== END Understanding __proto__ or [[prototype]]===================");



console.log("*");
console.log("*");
console.log("*");

console.log("============ Starting solution  2 using __proto__ or [[prototype]]  =====================");

function createUserSample3(firstName, lastName, age) {
    const user =  Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    return user;
}

const user6 = createUserSample3("user6", "Das", 24);
console.log(user6.about());
const user7 = createUserSample3("user7", "Sarkar", 24);
console.log(user7.about());
console.log('user7 = ',user7);

/**
In this way  we d not have to add new function (Which is added in userMethods) as a referance in the createUser fucntio. All newly added fucntion will be available in the __proto__ or [[prototype]. So if the called method is not available in createUser function it will check in the __proto__ or [[prototype].
 */