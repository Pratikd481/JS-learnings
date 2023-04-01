/**
Arrow function doesn't has its own this . 
 */
const user1 = {
    firstName: "Pratik",
    age: 27,
    about: () => {
        console.log(this.firstName, this.age);
        console.log(this); // this prints window. It is taken from it's lexical scope
    },
};
user1.about(); 
// Prints undefined undefined becaue Arrow function doesn't has its own this . 