const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key1: "valueUnique",
    key2: "value2",
    key4: "value3",
};

const newObject = { ...obj1, ...obj2, key69: "value69" };
console.log(newObject);

const newObject2 =  {
    ...["item1","item2"]
};
console.log(newObject2);