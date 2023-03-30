console.log(this);
//If we directly use this key in a js file it will pring window object

console.log(window);
//this will also print windoew object


//Now if we run the below code 
function myFunc(){
    console.log(this);
}
myFunc();
//it will also print window oject
//whenever we create a function, that function gets appended in window object. Thats why we can access the funciton using the below systx also
window.myFunc();