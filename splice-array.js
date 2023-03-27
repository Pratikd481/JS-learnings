const myArray = ["item1", "item2", "item3"];

// delete and insert item
const deletedItem = myArray.splice(1, 2, "Inserted item1", "Inserten item 2");
console.log("Deleted items", deletedItem);
console.log("New array", myArray);
