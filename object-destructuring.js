/**
 * 
Object destructuring is a powerful feature in JavaScript that allows you to extract properties from an object and assign them to variables in a more concise way. With object destructuring, you can avoid having to write repetitive code to access individual properties of an object.

To use object destructuring, you simply specify the properties you want to extract from an object, enclosed in curly braces, and assign them to variables with the same name. For example:
 * 
 */
const band = {
    bandName: "led zeppline",
    famousSong: "straight to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(famousSong);
console.log(restProps);

let { year: var1, anotherFamousSong: var2 } = restProps;

console.log(var1);
console.log(var2);

console.log("============================");

const user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
    },
    hobbies: ["reading", "cooking", "traveling"],
};

const {
    name,
    address: { city },
    hobbies: [firstHobby, ...otherHobbies],
} = user;

console.log(name); // 'John'
console.log(city); // 'New York'
console.log(firstHobby); // 'reading'
console.log(otherHobbies); // ['cooking', 'traveling']
