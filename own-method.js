function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Pratik",
    age: 27,
    about: personInfo,
};

const person2 = {
    firstName: "Partha",
    age: 24,
    about: personInfo,
};

person1.about();
person2.about();