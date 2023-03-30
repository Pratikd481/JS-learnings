function about(hobby, favMusicion) {
    console.log(this.firstName, this.age, hobby, favMusicion);
}

const user1 = {
    firstName: "Pratik",
    age: 28,
};

const user2 = {
    firstName: "Pratik",
    age: 28,
};

/**
Now if we want to use that about method for user1 and user2 object then we can use  call, apply and bind method example and the difference between them given below
 */

about.call(user1, "guiter", "Mozart");

about.apply(user1, ["guiter", "Mozart"]);

//difference between call and apply metnod is arguments array passed in apply method
const customFunc = about.bind(user1, "guiter", "Mozart");
customFunc();
//bind is same as call it' just return the method.