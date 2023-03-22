const numbers = [1, 2, 3, 4, 5, 6];
/***
Callback of filter method should always return boolean value. Element will be added in the returned array if callback function return true. Element will not bhe added in the returned array if callback function returned false.
 */
const evenNumbers = numbers.filter((number) => {
    return number % 2 == 0;
});
console.log(evenNumbers);
