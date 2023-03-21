function myFunc(){
    function hello(){
        console.log("Hello from hello function");
    }
    return hello;
}
const ans  = myFunc();
ans();