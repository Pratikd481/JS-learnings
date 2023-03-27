const person1 = {
    id: 1,
    firstName: "Pratik",
};


const person2 =  {...person1};
person1.key = 'test';
console.log("Person 2",person2);

